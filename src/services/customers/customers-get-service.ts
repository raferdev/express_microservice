import { customersGetAllRepository } from "@/repositories/customers/customers-get-repository";

export async function customersGetService() {
  return await customersGetAllRepository();
}
