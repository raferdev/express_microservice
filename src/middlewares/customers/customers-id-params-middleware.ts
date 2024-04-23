import { NextFunction, Request, Response } from "express";
import { customersIdSchema } from "@/schemas/customers/customers-id-schema";
import { logger } from "@/config/logger";

export async function customerSchemaMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    logger.info("Validating customer id params schema");
    const newCustomer = req.params.id;
    await customersIdSchema.parseAsync(newCustomer);

    next();
  } catch (error) {
    logger.error("Customer id params schema invalid", error);
    res.status(400).json({ error: "schema invalid" });
  }
}
