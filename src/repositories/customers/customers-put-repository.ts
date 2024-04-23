import { Customer } from "@/@types/database";
import { dynamodb } from "@/config/database";
import { env } from "@/config/env";
import { v4 } from "uuid";
import { PutCommand } from "@aws-sdk/lib-dynamodb";

export async function customerPutRepository(customer: Customer) {
  await dynamodb.send(
    new PutCommand({
      TableName: env.DYNAMODB_TABLE,
      Item: {
        customersID: v4(),
        ...customer,
      },
    })
  );
  return customer;
}
