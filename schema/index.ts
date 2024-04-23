import {z} from "zod";

export const createCardSchema = z.object({
  name: z.string().min(1, {
    message: "Le nom ne peut être vide !"
  }),
  fullname: z.string().min(1, {
    message: "Le nom ne peut être vide !"
  }),
  age: z.coerce.number().min(0, {
    message: "L'age minimum est 0 !"
  }),
  race: z.string().min(1, {
    message: "La race ne peut être vide !"
  }),
  imageSrc: z.string()
});