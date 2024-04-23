import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { consts } from "./const.js";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

export const dynamoClient = new DynamoDBClient({
  apiVersion: consts.version,
});

export const dynamodb = DynamoDBDocumentClient.from(dynamoClient);
