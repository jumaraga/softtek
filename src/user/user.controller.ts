import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
   constructor(
      private readonly service: UserService

   ) { }
   
   @Post()
   createUser(@Body('document') document: string) {
      return this.service.registerUser(document)
   }
}