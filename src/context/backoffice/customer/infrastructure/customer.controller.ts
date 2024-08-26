import { Body, Controller, Post } from "@nestjs/common";
import { CustomerService } from "../application/customer.service";
import { customerDto } from "../domain/customer.dto";

@Controller('customer')
export class customerController {
   constructor(
      private readonly customerService: CustomerService
   ) {
   }
   @Post('')
   createCustomer(@Body() customer: customerDto) {
      this.customerService.saveCustomer(customer)
   }
}