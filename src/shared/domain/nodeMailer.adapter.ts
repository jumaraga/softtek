import { ConfigService } from "@nestjs/config";
import { emailPort } from "./port/email.port";
import { createTransport } from "nodemailer";
import { Injectable } from "@nestjs/common";
@Injectable()
export class NodeMailerAdapter implements emailPort {
   transporter;
   constructor(protected readonly configService: ConfigService) {
      this.transporter = this.createTransporter()
   }
   private createTransporter() {

      return createTransport({
         host: this.configService.get<string>('email.host'),
         port: this.configService.get('email.port'),
         secure: false,
         auth: {
            user: this.configService.get('email.user'),
            pass: this.configService.get('email.password')
         },
      });
   }
   async send(to: string[], subject: string, template: string): Promise<void> {
      const mailOptions = {
         from: this.configService.get('email.user'),
         to,
         subject,
         html: template
      }
      console.log(this.configService.get('email.password'), this.configService.get('email.host'), this.configService.get('email.user'), this.configService.get('email.password'))
      await this.transporter.sendMail(mailOptions);
   }
}