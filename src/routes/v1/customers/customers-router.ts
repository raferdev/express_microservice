import { customersDeleteController } from "@/controllers/customers/customers-delete-controller";
import { customersGetController } from "@/controllers/customers/customers-get-controller";
import { customersGetByIdController } from "@/controllers/customers/customers-get-id-controller";
import { customersPutController } from "@/controllers/customers/customers-put-controller";
import { Router, type Router as RouterType } from "express";

const customerRouter: RouterType = Router();

customerRouter.get("/customers", customersGetController);
customerRouter.get("/customers/:id", customersGetByIdController);
customerRouter.put("/customers", customersPutController);
customerRouter.delete("/customers/:id", customersDeleteController);

export default customerRouter;
