import { customerGetByIdRepository } from "@/repositories/customers/customers-get-id-repository";

export async function customersGetByIdService(id: string) {
  const { Item } = await customerGetByIdRepository(id);

  return Item;
}
