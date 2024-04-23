import { logger } from "@/config/logger";
import { customersGetService } from "@/services/customers/customers-get-service";
import { Request, Response } from "express";

export async function customersGetController(req: Request, res: Response) {
  try {
    logger.info("Getting customers list");

    const customers = await customersGetService();

    return res.json({ customers });
  } catch (error) {
    logger.error("Error getting customers", error);

    res.sendStatus(500);
  }
}
