import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './DTOs/user.dto';
import { UserService } from './user.service';
;

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Get('/office-key')
    getOfficeKey(){
        return this.userService.getOfficeKey();
    }

}
