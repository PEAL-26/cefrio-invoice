import { z } from "zod"

export const invoiceSchema = z.object({
  id: z.string(),
  number: z.string(),
  type: z.string(),
  customer: z.string(),
  total: z.number(),
})

export type Invoice = z.infer<typeof invoiceSchema>
