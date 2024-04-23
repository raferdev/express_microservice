import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DYNAMODB_TABLE: z.string().min(1),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DYNAMODB_TABLE: process.env.CUSTOMERS_TABLE,
  },
});
