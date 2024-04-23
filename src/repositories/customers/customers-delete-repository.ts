import { dynamodb } from "@/config/database";
import { env } from "@/config/env";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";

export async function customerDeleteByIdRepository(id: string) {
  return await dynamodb.send(
    new DeleteCommand({
      TableName: env.DYNAMODB_TABLE,
      Key: {
        id,
      },
    })
  );
}
