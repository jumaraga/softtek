import { Module } from "@nestjs/common";
import { EmailService } from "src/retention/email/sendWelcomeEmail";
import { NodeMailerAdapter } from "src/shared/domain/nodeMailer.adapter";

@Module({
   imports: [],
   controllers: [],
   providers: [
      EmailService,
      NodeMailerAdapter]
})
export class RetentionModule { }