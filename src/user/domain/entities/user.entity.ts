import { INVALID_DOMAIN_ERROR } from "../errors";

export class User {
   public readonly document: number;
   public readonly username: string;
   public readonly corporativeEmail: string;
   public readonly firstname: string;
   public readonly lastname: string;

   constructor(document: number, username: string, firstname: string, lastname: string, corporativeEmail: string) {
      this.document = document;
      this.firstname = firstname;
      this.lastname = lastname;
      this.username = username;
      this.corporativeEmail = this.isValidEmail(corporativeEmail);

   }

   isValidEmail(email: string) {
      const validDomains = ['gmail.com','corporative.pe','validDomain.com'];
      const emailDomain = email.split('@')[1];
      if (!validDomains.includes(emailDomain)) throw new INVALID_DOMAIN_ERROR;
      return email;
   }

}


