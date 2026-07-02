import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/DTOs/createUser.dto';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './DTOs/Login.dto';
import { UserResponseDto } from 'src/user/DTOs/user.dto';
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
       private readonly userRepository: Repository<User>){
    }

    async register(createUserDto: CreateUserDto): Promise<UserResponseDto> {
        const user = this.userRepository.create(createUserDto);
        return UserResponseDto.create(user);
    }
    async login(loginDto: LoginDto): Promise<UserResponseDto> {
        const user = await this.userRepository.findOne({
            where: {
                email: loginDto.email,
            },
        });
        if(!user){
            throw new UnauthorizedException('Invalid credentials');
        }
        return UserResponseDto.create(user);
    }
}
