import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  number: z.string(),
  type: z.string(),
  customer: z.string(),
  total: z.number(),
});

export type Product = z.infer<typeof productSchema>;
