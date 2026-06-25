import { Entity } from "typeorm";
import { v7 as uuidv7 } from 'uuid';
import { 
    PrimaryColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    Column,
    Index,
    Unique } from "typeorm";
@Entity()
export class User{
    @PrimaryColumn("uuid")
    id: string = uuidv7();

    @Column()
    @Index({ unique: true })
    email: string;

    @Column()
    @Index({ unique: true })
    phoneNumber: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    isActive: boolean = true;

    @Column()
    isDeleted: boolean = false;

    @Column()
    isVerified: boolean = false;

    @Column()
    isEmailVerified: boolean = false;
    @Column()
    isPhoneVerified: boolean = false;
    @Column()
    isPasswordVerified: boolean = false;
}