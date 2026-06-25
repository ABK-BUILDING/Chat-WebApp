import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/DTOs/user.dto';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './DTOs/Login.dto';
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
       private readonly userRepository: Repository<User>){
    }

    async register(createUserDto: CreateUserDto){
        const user = this.userRepository.create(createUserDto);
        //await this.userRepository.save(user);
        return user;
    }
    async login(loginDto: LoginDto){
        const user = await this.userRepository.findOne({
            where: {
                email: loginDto.email,
            },
        });
        if(!user){
            throw new UnauthorizedException('Invalid credentials');
        }
        return user;
    }
}
