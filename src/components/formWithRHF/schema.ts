import { z } from 'zod';
import { VALUES } from './constants';

const validationSchema = z.object({
    firstName: z.string().min(1, { message: "First Name is required" }),
    lastName: z.string().min(1, { message: "Last Name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email" }),
    age: z.enum(VALUES),
    password: z.string().min(6, { message: "Password is required" }),
    confirmPassword: z.string().min(6, { message: "Password is required" })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})

export type TValidationSchema = z.infer<typeof validationSchema>;

export {
    validationSchema
}