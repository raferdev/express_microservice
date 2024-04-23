import { customerGetByIdRepository } from "@/repositories/customers/customers-get-id-repository";

export async function searchCustomersService(id: string) {
  return await customerGetByIdRepository(id);
}
