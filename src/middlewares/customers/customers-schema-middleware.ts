import { NextFunction, Request, Response } from "express";
import { customerSchema } from "@/schemas/customers/customers-schema";
import { logger } from "@/config/logger";

export async function customerSchemaMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    logger.info("Validating customer schema");
    const newCustomer = req.body;
    await customerSchema.parseAsync(newCustomer);

    next();
  } catch (error) {
    logger.error("Customer schema invalid", error);
    res.status(400).json({ error: "schema invalid" });
  }
}
