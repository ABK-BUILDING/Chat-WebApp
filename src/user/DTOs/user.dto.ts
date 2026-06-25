import { createZodDto } from "nestjs-zod";
import { z } from "zod";
const createUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    phoneNumber: z.string().min(1),

})

export class CreateUserDto extends createZodDto(createUserSchema){

}