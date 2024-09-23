import { z } from "zod";

export const userSignupSchema = z.object({
    fullname: z.string().min(1, "Enter your full name"),
    email: z.string().email("Enter your email address"),
    password: z.string().min(6, "Password must be at least 6 characters."),
    contact: z.string().min(10, { message: "Contact number at least 10 digit" }).max(10, "Contact number at most 10 digit"),
});

export type SignupInputState = z.infer<typeof userSignupSchema>;

export const userLoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Invalid password.")
});

export type LoginInputState = z.infer<typeof userLoginSchema>;