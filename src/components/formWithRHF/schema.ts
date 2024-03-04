import { z } from "zod";

const validationSchema = z
    .object({
        firstName: z.string().min(1, { message: "Firstname is required!" }),
        lastName: z.string().min(1, { message: "Lastname is required!" }),
        email: z.string().min(1, { message: "Email is required!" }).email({
            message: "Email is not valid!",
        }),
        password: z
            .string()
            .min(6, { message: "Password must be at least 6 characters!" }),
        confirmPassword: z
            .string()
            .min(1, { message: "Confirm password is required!" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords don't match",
    });

export type ValidationSchema = z.infer<typeof validationSchema>;

export { validationSchema };