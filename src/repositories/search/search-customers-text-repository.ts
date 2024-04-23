import { dynamodb } from "@/config/database";
import { ScanCommand } from "@aws-sdk/client-dynamodb";
import { env } from "@/config/env";

export async function searchCostumersByTextRepository(text: string) {
  // this function is realy poor in performance, it will ok in small datasets ~100 items

  return await dynamodb.send(
    new ScanCommand({
      TableName: env.DYNAMODB_TABLE,
      FilterExpression:
        "contains(#name, :text) OR contains(#email, :text) OR contains(#phone, :text)  OR contains(#address, :text)",
      ExpressionAttributeNames: {
        "#name": "name",
        "#address": "address",
        "#email": "email",
        "#phone": "phone",
      },
      ExpressionAttributeValues: { ":text": { S: text } },
    })
  );
}
