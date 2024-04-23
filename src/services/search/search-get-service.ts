import { searchCostumersByTextRepository } from "@/repositories/search/search-customers-text-repository";

export async function searchCustomersService(text: string) {
  const { Items } = await searchCostumersByTextRepository(text);

  return Items;
}
