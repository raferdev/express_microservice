import { dynamodb } from "@/config/database";
import { env } from "@/config/env";
import { GetCommand } from "@aws-sdk/lib-dynamodb";

export async function customerGetByIdRepository(id: string) {
  return await dynamodb.send(
    new GetCommand({
      TableName: env.DYNAMODB_TABLE,
      Key: {
        customersID: id,
      },
    })
  );
}
