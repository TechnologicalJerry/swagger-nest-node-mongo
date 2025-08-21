import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class VerifyEmailDto {
  @ApiProperty({
    description: 'Email verification token',
    example: 'verification-token-123',
  })
  @IsString()
  @IsNotEmpty()
  token: string;
}
