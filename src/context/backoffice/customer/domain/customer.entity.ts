import { ClientPhone } from "../../orders/domain/valueObjects/clientPhone.vo";
import { CustomerDocument } from "./customerId.vo";

export class Customer {
   constructor(public readonly id: CustomerDocument,
      private phone: ClientPhone,
      public fullname: string) { }

   static create(id: number, phone: string, fullname: string) {
      return new Customer(
         new CustomerDocument(id),
         new ClientPhone(phone),
         fullname)
   }

   toPrimitive() {
      return {
         document: this.id.value,
         phone: this.phone.value,
         fullname: this.fullname
      }
   }

}