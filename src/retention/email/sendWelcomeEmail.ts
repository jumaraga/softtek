import { Inject } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { NodeMailerAdapter } from "src/shared/domain/nodeMailer.adapter";
import { emailPort } from "src/shared/domain/port/email.port";
import { UserRegisterDomainEvent } from "src/user/domain/events/userRegister";

export class EmailService {
   constructor(
      @Inject(NodeMailerAdapter)
      private readonly emailport: emailPort
   ) { }
   @OnEvent('user.registered')
   async sendWelcomeEmail(payload: UserRegisterDomainEvent) {
      await this.emailport.send([payload.corporativeEmail],'welcome email','cosas')
      console.log(payload, 'recibiel mensaje')
   }
}  