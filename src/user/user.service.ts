import { Injectable } from '@nestjs/common';
import { env } from 'config/env';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm'
@Injectable()
export class UserService {
    constructor(){}

    getOfficeKey(){
        return env.officeKeyUrl;
    }
}
