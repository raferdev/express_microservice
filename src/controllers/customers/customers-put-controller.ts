import { logger } from "@/config/logger";
import { customersPutService } from "@/services/customers/customers-put-service";
import { Request, Response } from "express";

export async function customersPutController(req: Request, res: Response) {
  try {
    logger.info("Posting customer");

    const customer = await customersPutService(req.body);

    return res.status(200).json(customer);
  } catch (error) {
    logger.error("Error posting customer", error);
    return res.sendStatus(500);
  }
}
