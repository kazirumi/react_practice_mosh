import { z } from "zod";

export const expenseSchema = z.object({
    description: z.string().nonempty({message:'Description is required.'}),
    amount: z.coerce.number().min(1,{message:'amount must be greater than 1'}).positive(),
    category: z.string().nonempty({message:'select category'}),
  });
  
export type TSexpenseSchema = z.infer<typeof expenseSchema>;