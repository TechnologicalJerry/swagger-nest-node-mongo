/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users: any = [{ id: 0, name: 'Jerry' }];
}
