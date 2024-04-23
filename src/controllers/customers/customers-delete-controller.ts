import { logger } from "@/config/logger";
import { customersDeleteService } from "@/services/customers/customers-delete-service";
import { Request, Response } from "express";

export async function customersDeleteController(req: Request, res: Response) {
  try {
    logger.info("Deleting customer");

    await customersDeleteService(req.params.id!);

    return res.send().status(200);
  } catch (error) {
    logger.error("Error deleting customer", error);

    return res.sendStatus(500);
  }
}
