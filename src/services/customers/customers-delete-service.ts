import { customerDeleteByIdRepository } from "@/repositories/customers/customers-delete-repository";

export async function customersDeleteService(id: string) {
  return await customerDeleteByIdRepository(id);
}
