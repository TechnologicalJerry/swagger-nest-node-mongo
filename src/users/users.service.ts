import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
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

    // Remove confirmPassword from the data to be saved
    const { confirmPassword, ...userData } = createUserDto;
    
    const createdUser = new this.userModel(userData);
    return createdUser.save();
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
