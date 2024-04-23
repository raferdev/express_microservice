import { dynamodb } from "@/config/database";
import { QueryCommand } from "@aws-sdk/client-dynamodb";
import { env } from "@/config/env";

export async function searchCostumersByTextRepository(text: string) {
  const customer = await dynamodb.send(
    new QueryCommand({
      TableName: env.DYNAMODB_TABLE,
      FilterExpression: "contains(#name, :text) OR contains(#email, :text) ",
      ExpressionAttributeValues: { ":text": { S: text } },
    })
  );

  return customer;
}
