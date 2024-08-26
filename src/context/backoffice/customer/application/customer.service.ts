import { Inject, Injectable } from "@nestjs/common";
import { CustomerRepository } from "../domain/customer.repository";
import { DynamoCustomerRepository } from "../infrastructure/dynamoCustomer.repository";
import { CustomerDocument } from "../domain/customerId.vo";
import { customerDto } from "../domain/customer.dto";
import { Customer } from "../domain/customer.entity";

Injectable()
export class CustomerService {
   constructor(
      @Inject(DynamoCustomerRepository)
      private customerRepo: CustomerRepository,
   ) { }

   findCustomer(document: string) {
      const customerDocument = new CustomerDocument(document);
      const customer = this.customerRepo.getItem(customerDocument)
      if (!customer) throw new Error('Customer not found')
   }

   saveCustomer(customer: customerDto) {
      const newCustomer = Customer.create(customer.document, customer.phone, customer.fullname)
      this.customerRepo.save(newCustomer)
   }
}