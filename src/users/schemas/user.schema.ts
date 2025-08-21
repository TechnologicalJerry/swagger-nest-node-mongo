import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @ApiProperty({
      description: 'The unique identifier of the user',
      example: '507f1f77bcf86cd799439011'
    })
    _id: string;

    @ApiProperty({
      description: 'The name of the user',
      example: 'John Doe'
    })
    @Prop({ required: true })
    name: string;

    @ApiProperty({
      description: 'The email address of the user',
      example: 'john.doe@example.com'
    })
    @Prop({ required: true, unique: true })
    email: string;

    @ApiProperty({
      description: 'The password of the user (will be hashed in production)',
      example: 'password123'
    })
    @Prop({ required: true })
    password: string;

    @ApiProperty({
      description: 'The date when the user was created',
      example: '2024-01-01T00:00:00.000Z'
    })
    createdAt: Date;

    @ApiProperty({
      description: 'The date when the user was last updated',
      example: '2024-01-01T00:00:00.000Z'
    })
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
