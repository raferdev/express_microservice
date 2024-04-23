import { logger } from "@/config/logger";
import { customersGetByIdService } from "@/services/customers/customers-get-id-service.js";
import { Request, Response } from "express";

export async function customersGetByIdController(req: Request, res: Response) {
  try {
    logger.info("Getting customer");

    const customer = await customersGetByIdService(req.params.id!);

    return res.status(200).json(customer);
  } catch (error) {
    logger.error("Error getting customer", error);
    return res.sendStatus(500);
  }
}
