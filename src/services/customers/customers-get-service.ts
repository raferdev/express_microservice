import { customersGetAllRepository } from "@/repositories/customers/customers-get-repository";

export async function customersGetService() {
  const { Items } = await customersGetAllRepository();

  return Items;
}
