import { Controller, Post, Body, UseGuards, Request, Get, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({
    status: 200,
    description: 'User logged in successfully',
    type: AuthResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid credentials or email not verified',
  })
  async login(@Request() req, @Body() loginDto: LoginDto): Promise<AuthResponseDto> {
    return this.authService.login(loginDto);
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Refresh access token' })
  @ApiResponse({
    status: 200,
    description: 'Token refreshed successfully',
    type: AuthResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid refresh token',
  })
  async refreshToken(@Body() refreshTokenDto: RefreshTokenDto): Promise<AuthResponseDto> {
    return this.authService.refreshToken(refreshTokenDto);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'User logout' })
  @ApiResponse({
    status: 200,
    description: 'User logged out successfully',
  })
  async logout(@Request() req, @Body() refreshTokenDto: RefreshTokenDto): Promise<{ message: string }> {
    await this.authService.logout(req.user.userId, refreshTokenDto.refreshToken);
    return { message: 'Logged out successfully' };
  }

  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Request password reset' })
  @ApiResponse({
    status: 200,
    description: 'Password reset email sent (if user exists)',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'If an account with that email exists, a password reset link has been sent.',
        },
      },
    },
  })
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto): Promise<{ message: string }> {
    return this.authService.forgotPassword(forgotPasswordDto);
  }

  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reset password with token' })
  @ApiResponse({
    status: 200,
    description: 'Password reset successfully',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Password has been reset successfully',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid or expired reset token',
  })
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto): Promise<{ message: string }> {
    return this.authService.resetPassword(resetPasswordDto);
  }

  @Post('verify-email')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Verify email address' })
  @ApiResponse({
    status: 200,
    description: 'Email verified successfully',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Email verified successfully',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid or expired verification token',
  })
  async verifyEmail(@Body() verifyEmailDto: VerifyEmailDto): Promise<{ message: string }> {
    return this.authService.verifyEmail(verifyEmailDto);
  }

  @Post('resend-verification/:email')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Resend email verification' })
  @ApiResponse({
    status: 200,
    description: 'Verification email sent successfully',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Verification email sent successfully',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Email is already verified',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  async resendVerificationEmail(@Param('email') email: string): Promise<{ message: string }> {
    return this.authService.resendVerificationEmail(email);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({
    status: 200,
    description: 'User profile retrieved successfully',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  getProfile(@Request() req) {
    return req.user;
  }
}
