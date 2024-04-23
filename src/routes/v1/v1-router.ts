import { Router, type Router as RouterType } from "express";
import customerRouter from "./customers/customers-router";
import searchRouter from "./search/search-router";

const v1Router: RouterType = Router();

v1Router.use("/v1", customerRouter);
v1Router.use("/v1", searchRouter);

export { v1Router };
