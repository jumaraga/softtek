import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { DynamoColaboradorRepository } from "./infrastructure/dynamoColaborador.repository";
import { DynamoUserRepository } from "./infrastructure/dynamoUser.repository";
import { CognitoAuthAdapter } from "./infrastructure/adapter/cognitoAuth.adapter";
import { EmailService } from "src/retention/email/sendWelcomeEmail";
import { NodeMailerAdapter } from "src/shared/domain/nodeMailer.adapter";

@Module({
   imports: [],
   controllers: [UserController],
   providers: [
      UserService,
      DynamoColaboradorRepository,
      DynamoUserRepository,
      CognitoAuthAdapter, EmailService,NodeMailerAdapter]
})
export class UserModule { }