import { logger } from "@/config/logger";
import { searchCustomersService } from "@/services/search/search-get-service";
import { Request, Response } from "express";

export async function searchGetCustomersController(
  req: Request,
  res: Response
) {
  try {
    logger.info("Getting customers");
    const text = req.query.text as string;

    const cusomer = await searchCustomersService(text);

    return res.status(200).json(cusomer);
  } catch (error) {
    logger.error("Error searching customer", error);

    return res.sendStatus(500);
  }
}
