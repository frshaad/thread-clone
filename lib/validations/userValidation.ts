import * as z from "zod";

export const userFormSchema = z.object({
  profile_photo: z.string().url().min(1, { message: "Set a profile picture" }),
  name: z
    .string()
    .min(3, { message: "Must be at least 3 characters" })
    .max(30, { message: "Must be a maximum of 30 characters" }),
  username: z
    .string()
    .min(3, { message: "Must be at least 3 characters" })
    .max(30, { message: "Must be a maximum of 30 characters" }),
  bio: z
    .string()
    .max(1000, { message: "Must be a maximum of 1000 characters" }),
});
