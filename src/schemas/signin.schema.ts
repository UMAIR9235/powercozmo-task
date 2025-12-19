import z from "zod";

export const signinUserSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter an email address" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(1, { message: "Please enter a password" })
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type SigninUserSchemaType = z.infer<typeof signinUserSchema>;
