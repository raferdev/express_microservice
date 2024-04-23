import { z } from "zod";

export const searchCustomerQueryText = z
  .string()
  .min(1)
  .max(100)
  .transform((data) => data.toLowerCase());
