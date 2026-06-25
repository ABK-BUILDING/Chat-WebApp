import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const loginSchema = z.object({
    email: z.email().optional(),
    password: z.string().min(8),
    phoneNumber: z.string().min(1).optional(),
})

export class LoginDto extends createZodDto(loginSchema){
}
