import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { 
  ApiTags, 
  ApiOperation, 
  ApiResponse, 
  ApiParam, 
  ApiBody, 
  ApiCreatedResponse, 
  ApiOkResponse, 
  ApiNotFoundResponse, 
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';

@ApiTags('users')
@Controller('users')
export class UsersController {
  
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ 
    summary: 'Create a new user',
    description: 'Creates a new user with the provided information. All fields are required and validated.'
  })
  @ApiBody({ 
    type: CreateUserDto,
    description: 'User data to create a new user account'
  })
  @ApiCreatedResponse({ 
    description: 'User created successfully', 
    type: User
  })
  @ApiBadRequestResponse({ 
    description: 'Bad request - validation failed or user already exists',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 400 },
        message: { 
          type: 'array', 
          items: { type: 'string' },
          example: ['email must be an email', 'username already exists']
        },
        error: { type: 'string', example: 'Bad Request' }
      }
    }
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 500 },
        message: { type: 'string', example: 'Internal server error' },
        error: { type: 'string', example: 'Internal Server Error' }
      }
    }
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ 
    summary: 'Get all users',
    description: 'Retrieves a list of all users in the system. Returns an empty array if no users exist.'
  })
  @ApiOkResponse({ 
    description: 'List of all users retrieved successfully', 
    type: [User]
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 500 },
        message: { type: 'string', example: 'Internal server error' },
        error: { type: 'string', example: 'Internal Server Error' }
      }
    }
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ 
    summary: 'Get a user by ID',
    description: 'Retrieves a specific user by their MongoDB ObjectId. Returns 404 if user is not found.'
  })
  @ApiParam({ 
    name: 'id', 
    description: 'User ID (MongoDB ObjectId)',
    example: '507f1f77bcf86cd799439011',
    type: 'string'
  })
  @ApiOkResponse({ 
    description: 'User found and retrieved successfully', 
    type: User
  })
  @ApiNotFoundResponse({ 
    description: 'User not found',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 404 },
        message: { type: 'string', example: 'User not found' },
        error: { type: 'string', example: 'Not Found' }
      }
    }
  })
  @ApiBadRequestResponse({
    description: 'Invalid user ID format',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 400 },
        message: { type: 'string', example: 'Invalid user ID format' },
        error: { type: 'string', example: 'Bad Request' }
      }
    }
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 500 },
        message: { type: 'string', example: 'Internal server error' },
        error: { type: 'string', example: 'Internal Server Error' }
      }
    }
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ 
    summary: 'Update a user',
    description: 'Updates an existing user with the provided data. Only provided fields will be updated.'
  })
  @ApiParam({ 
    name: 'id', 
    description: 'User ID (MongoDB ObjectId)',
    example: '507f1f77bcf86cd799439011',
    type: 'string'
  })
  @ApiBody({ 
    type: UpdateUserDto,
    description: 'User data to update (all fields are optional)'
  })
  @ApiOkResponse({ 
    description: 'User updated successfully', 
    type: User
  })
  @ApiNotFoundResponse({ 
    description: 'User not found',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 404 },
        message: { type: 'string', example: 'User not found' },
        error: { type: 'string', example: 'Not Found' }
      }
    }
  })
  @ApiBadRequestResponse({ 
    description: 'Bad request - validation failed or user already exists',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 400 },
        message: { 
          type: 'array', 
          items: { type: 'string' },
          example: ['email must be an email', 'username already exists']
        },
        error: { type: 'string', example: 'Bad Request' }
      }
    }
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 500 },
        message: { type: 'string', example: 'Internal server error' },
        error: { type: 'string', example: 'Internal Server Error' }
      }
    }
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ 
    summary: 'Delete a user',
    description: 'Permanently deletes a user from the system. This action cannot be undone.'
  })
  @ApiParam({ 
    name: 'id', 
    description: 'User ID (MongoDB ObjectId)',
    example: '507f1f77bcf86cd799439011',
    type: 'string'
  })
  @ApiOkResponse({ 
    description: 'User deleted successfully', 
    type: User
  })
  @ApiNotFoundResponse({ 
    description: 'User not found',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 404 },
        message: { type: 'string', example: 'User not found' },
        error: { type: 'string', example: 'Not Found' }
      }
    }
  })
  @ApiBadRequestResponse({
    description: 'Invalid user ID format',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 400 },
        message: { type: 'string', example: 'Invalid user ID format' },
        error: { type: 'string', example: 'Bad Request' }
      }
    }
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 500 },
        message: { type: 'string', example: 'Internal server error' },
        error: { type: 'string', example: 'Internal Server Error' }
      }
    }
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
