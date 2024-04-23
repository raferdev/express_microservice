import { customerGetByIdRepository } from "@/repositories/customers/customers-get-id-repository";

export async function customersGetByIdService(id: string) {
  return await customerGetByIdRepository(id);
}
