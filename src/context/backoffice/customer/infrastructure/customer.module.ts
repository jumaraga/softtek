import { Module } from "@nestjs/common";
import { CustomerService } from "../application/customer.service";
import { customerController } from "./customer.controller";
import { DynamoCustomerRepository } from "./dynamoCustomer.repository";

@Module(
   {
      imports: [],
      controllers: [customerController],
      providers: [
         CustomerService,
         DynamoCustomerRepository
      ]
   }
)
export class CustomerModule { }