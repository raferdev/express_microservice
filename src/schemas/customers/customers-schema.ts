import { z } from "zod";

export const customerSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    phone: z
      .string()
      .regex(
        /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/
      ),
    address: z.string().min(1).max(100),
  })
  .transform((data) => ({
    name: data.name.toLowerCase(),
    email: data.email.toLowerCase(),
    phone: data.phone,
    address: data.address.toLowerCase(),
  }));
