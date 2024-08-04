import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
   endpoint: 'http://localhost:4566'
});
export const dynamoClient = DynamoDBDocumentClient.from(client);