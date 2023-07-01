import * as z from "zod"

export const authSchema = z.object({
  email: z.string().email({
    message: "Por favor escribe un correo valido.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Debe ser como minimo de 8 caracteres.",
    })
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "Debe contener al menos 8 caracteres, una mayuscula, una minuscula, un numbero y un caracter especial.",
    }),
})

export const verfifyEmailSchema = z.object({
  code: z
    .string()
    .min(6, {
      message: "Verification code must be 6 characters long",
    })
    .max(6),
})

export const checkEmailSchema = z.object({
  email: authSchema.shape.email,
})

export const resetPasswordSchema = z
  .object({
    password: authSchema.shape.password,
    confirmPassword: authSchema.shape.password,
    code: verfifyEmailSchema.shape.code,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las claves no coinciden",
    path: ["confirmPassword"],
  })
