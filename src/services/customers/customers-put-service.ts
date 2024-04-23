import { Customer } from "@/@types/database.js";
import { customerPutRepository } from "@/repositories/customers/customers-put-repository";

export async function customersPutService(customer: Customer) {
  return await customerPutRepository(customer);
}
