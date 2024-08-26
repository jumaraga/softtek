import { CustomerDocument } from "./customerId.vo";
import { Customer } from "./customer.entity";

export interface CustomerRepository {
   getItem(document:CustomerDocument): Promise<Customer>

   save(order: Customer):Promise<void>
}