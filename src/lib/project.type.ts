import { z } from "zod";

let titleLength = 4;
let descriptionLength = 25;

export const ProjectSchema = z.object({
    name: z.string().min(titleLength, {
        message:`minimum title length must be ${titleLength}`
    }),
    description:z.string().min(descriptionLength, {
        message:`minimum description length must be ${descriptionLength}`
    }).max(100, {
        message:`max length of description must be 100 char`
    })
  })
  