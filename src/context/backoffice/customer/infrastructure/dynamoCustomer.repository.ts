import { CustomerDocument } from "../domain/customerId.vo";
import { Customer } from "../domain/customer.entity";
import { CustomerRepository } from "../domain/customer.repository";
import { DynamoDBClient, PutItemCommand, PutItemCommandInput } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, PutCommandInput } from "@aws-sdk/lib-dynamodb";
import { Injectable } from "@nestjs/common";

const client = new DynamoDBClient({ endpoint: 'http://localhost:4566' });
const docClient = DynamoDBDocumentClient.from(client);
Injectable()
export class DynamoCustomerRepository implements CustomerRepository {
   getItem(document: CustomerDocument): Promise<Customer> {

      throw new Error("Method not implemented.");
   }
   async save(order: Customer): Promise<void> {
      const params: PutCommandInput = {
         TableName: 'testCustomerTable',
         Item: order.toPrimitive()
      }
      const command = new PutCommand(params)
      await docClient.send(command);
   }

}