import { z } from "zod";

export const customersIdSchema = z.string().min(1).max(100);
