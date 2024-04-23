import { searchCustomerQueryText } from "@/schemas/search/search-customers-schema";
import { NextFunction, Request, Response } from "express";

export async function seachCustomersTextMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { text } = req.query;

  await searchCustomerQueryText.parseAsync(text);

  next();
}
