import { searchCustomersService } from "@/services/search/search-get-service";
import { Request, Response } from "express";

export async function searchGetCustomersController(
  req: Request,
  res: Response
) {
  const text = req.query.text as string;

  await searchCustomersService(text);
  return res.send().status(200);
}
