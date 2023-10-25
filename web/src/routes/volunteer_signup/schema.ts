import { z } from "zod";
export const formSchema = z.object({
  name: z.string().min(2).max(50),
  cck_name: z.string().min(2).max(50),
  email: z.string().email(),
  phone_number: z.coerce.number(),
  cleaning: z.enum(["yes", "no"], {
      required_error: "You need to select an option"
    }),
  delivery: z.enum(["yes", "no"], {
      required_error: "You need to select an option"
    }),
  cooking: z.enum(["yes", "no"], {
      required_error: "You need to select an option"
    }),
  admin: z.enum(["yes", "no"], {
      required_error: "You need to select an option"
    }),
});
export type FormSchema = typeof formSchema;