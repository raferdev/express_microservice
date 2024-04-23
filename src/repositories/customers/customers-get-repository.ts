import { dynamodb } from "@/config/database";
import { env } from "@/config/env";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";

export async function customersGetAllRepository() {
  const customer = await dynamodb.send(
    new ScanCommand({ TableName: env.DYNAMODB_TABLE })
  );
  return customer;
}
