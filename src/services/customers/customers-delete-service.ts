import { customerDeleteByIdRepository } from "@/repositories/customers/customers-delete-repository";

export async function customersDeleteService(id: string) {
  const { Attributes } = await customerDeleteByIdRepository(id);

  return Attributes;
}
