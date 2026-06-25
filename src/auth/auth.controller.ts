import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/DTOs/user.dto';
import { LoginDto } from './DTOs/Login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('register')
    createUser(@Body() createUserDto: CreateUserDto){
        return this.authService.register(createUserDto);
    }
    @Post('login')
    login(@Body() loginDto: LoginDto){
        return this.authService.login(loginDto);
    }
}
