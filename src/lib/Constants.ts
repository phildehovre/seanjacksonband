import * as z from "zod"

export const formSchema = z.object({
    from_firstName: z.string().min(1, "First name is required"),
    from_lastName: z.string().min(1, "Last name is required"),
    user_email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
}).required()