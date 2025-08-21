import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '../dto/create-user.dto';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @ApiProperty({
      description: 'The unique identifier of the user',
      example: '507f1f77bcf86cd799439011',
      readOnly: true
    })
    _id: string;

    @ApiProperty({
      description: 'The first name of the user',
      example: 'John',
      minLength: 1,
      maxLength: 50
    })
    @Prop({ required: true, maxlength: 50 })
    firstName: string;

    @ApiProperty({
      description: 'The last name of the user',
      example: 'Doe',
      minLength: 1,
      maxLength: 50
    })
    @Prop({ required: true, maxlength: 50 })
    lastName: string;

    @ApiProperty({
      description: 'The username of the user (must be unique)',
      example: 'johndoe123',
      minLength: 3,
      maxLength: 30
    })
    @Prop({ required: true, unique: true, maxlength: 30 })
    userName: string;

    @ApiProperty({
      description: 'The email address of the user (must be unique)',
      example: 'john.doe@example.com',
      format: 'email'
    })
    @Prop({ required: true, unique: true })
    email: string;

    @ApiProperty({
      description: 'The phone number of the user',
      example: '+1234567890',
      pattern: '^\\+?[\\d\\s\\-\\(\\)]+$'
    })
    @Prop({ required: true })
    phone: string;

    @ApiProperty({
      description: 'The gender of the user',
      enum: Gender,
      example: Gender.MALE
    })
    @Prop({ required: true, enum: Gender })
    gender: Gender;

    @ApiProperty({
      description: 'The address of the user',
      example: '123 Main St, City, State 12345',
      maxLength: 200
    })
    @Prop({ required: true, maxlength: 200 })
    address: string;

    @ApiProperty({
      description: 'The hashed password of the user',
      example: 'hashedPassword123',
      writeOnly: true
    })
    @Prop({ required: true })
    password: string;

    @ApiProperty({
      description: 'Whether the user email is verified',
      example: false,
      readOnly: true
    })
    @Prop({ default: false })
    isEmailVerified: boolean;

    @ApiProperty({
      description: 'Email verification token',
      example: 'verification-token-123',
      readOnly: true
    })
    @Prop()
    emailVerificationToken?: string;

    @ApiProperty({
      description: 'Email verification token expiry',
      example: '2024-01-01T00:00:00.000Z',
      readOnly: true
    })
    @Prop()
    emailVerificationTokenExpiry?: Date;

    @ApiProperty({
      description: 'Password reset token',
      example: 'reset-token-123',
      readOnly: true
    })
    @Prop()
    passwordResetToken?: string;

    @ApiProperty({
      description: 'Password reset token expiry',
      example: '2024-01-01T00:00:00.000Z',
      readOnly: true
    })
    @Prop()
    passwordResetTokenExpiry?: Date;

    @ApiProperty({
      description: 'Refresh tokens for the user',
      example: ['refresh-token-1', 'refresh-token-2'],
      readOnly: true
    })
    @Prop({ type: [String], default: [] })
    refreshTokens: string[];

    @ApiProperty({
      description: 'The date when the user was created',
      example: '2024-01-01T00:00:00.000Z',
      readOnly: true
    })
    createdAt: Date;

    @ApiProperty({
      description: 'The date when the user was last updated',
      example: '2024-01-01T00:00:00.000Z',
      readOnly: true
    })
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
