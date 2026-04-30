import { z } from "zod";
import { validatePhone, validateCreditCard } from "@/lib/format";

// ============================================
// Field Schemas
// ============================================

export const emailSchema = z.string().email("Enter a valid email address");

export const phoneSchema = z
  .string()
  .min(1, "Phone number is required")
  .refine(validatePhone, "Enter a valid phone number");

export const creditCardSchema = z
  .string()
  .min(1, "Card number is required")
  .refine(validateCreditCard, "Enter a valid card number");

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(100, "Password is too long");

export const nameSchema = z
  .string()
  .min(2, "Name must be at least 2 characters")
  .max(50, "Name is too long");

// ============================================
// Form Schemas
// ============================================

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
export type LoginFormData = z.infer<typeof loginSchema>;

export const signupSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});
export type SignupFormData = z.infer<typeof signupSchema>;

export const contactSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});
export type ContactFormData = z.infer<typeof contactSchema>;
