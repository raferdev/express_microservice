import { searchGetCustomersController } from "@/controllers/search/search-get-customers-controller";
import { seachCustomersTextMiddleware } from "@/middlewares/search/search-customers-text-middleware";
import { Router, type Router as RouterType } from "express";

const searchRouter: RouterType = Router();

searchRouter.get(
  "/search",
  seachCustomersTextMiddleware,
  searchGetCustomersController
);

export default searchRouter;
