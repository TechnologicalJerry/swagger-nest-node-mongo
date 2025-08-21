import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { EmailService } from '../auth/email.service';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private emailService: EmailService,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Validate password confirmation
    if (createUserDto.password !== createUserDto.confirmPassword) {
      throw new BadRequestException('Password and confirmPassword do not match');
    }

    // Check if user with email already exists
    const existingEmail = await this.userModel.findOne({ email: createUserDto.email }).exec();
    if (existingEmail) {
      throw new BadRequestException('User with this email already exists');
    }

    // Check if user with username already exists
    const existingUsername = await this.userModel.findOne({ userName: createUserDto.userName }).exec();
    if (existingUsername) {
      throw new BadRequestException('User with this username already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(createUserDto.password, 12);

    // Generate email verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const verificationTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Remove confirmPassword from the data to be saved
    const { confirmPassword, ...userData } = createUserDto;
    
    const createdUser = new this.userModel({
      ...userData,
      password: hashedPassword,
      emailVerificationToken: verificationToken,
      emailVerificationTokenExpiry: verificationTokenExpiry,
      isEmailVerified: false,
    });

    const savedUser = await createdUser.save();

    // Send verification email
    try {
      await this.emailService.sendEmailVerification(
        savedUser.email,
        verificationToken,
        savedUser.userName
      );
    } catch (error) {
      // Log error but don't fail user creation
      console.error('Failed to send verification email:', error);
    }

    return savedUser;
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    // If email is being updated, check for uniqueness
    if (updateUserDto.email) {
      const existingEmail = await this.userModel.findOne({ 
        email: updateUserDto.email, 
        _id: { $ne: id } 
      }).exec();
      if (existingEmail) {
        throw new BadRequestException('User with this email already exists');
      }
    }

    // If username is being updated, check for uniqueness
    if (updateUserDto.userName) {
      const existingUsername = await this.userModel.findOne({ 
        userName: updateUserDto.userName, 
        _id: { $ne: id } 
      }).exec();
      if (existingUsername) {
        throw new BadRequestException('User with this username already exists');
      }
    }

    // If password is being updated, hash it
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 12);
    }

    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return updatedUser;
  }

  async remove(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return deletedUser;
  }
}
