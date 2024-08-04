import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { DynamoColaboradorRepository } from "./infrastructure/dynamoColaborador.repository";
import { DynamoUserRepository } from "./infrastructure/dynamoUser.repository";

@Module({
   imports: [],
   controllers: [UserController],
   providers: [UserService,DynamoColaboradorRepository,DynamoUserRepository]
})
export class UserModule { }