import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "./domain/repositories/user.respository";
import { DynamoUserRepository } from "./infrastructure/dynamoUser.repository";
import { ColaboradorRepository } from "./domain/repositories/colaborator.repository";
import { DynamoColaboradorRepository } from "./infrastructure/dynamoColaborador.repository";
import { NO_COLABORATOR_FOUND_ERROR, USER_EXIST_ERROR } from "./domain/errors";
import { User } from "./domain/entities/user.entity";
import { AuthPort } from "./domain/port/auth.port";
import { CognitoAuthAdapter } from "./infrastructure/adapter/cognitoAuth.adapter";
@Injectable()
export class UserService {
   constructor(
      @Inject(DynamoUserRepository)
      private readonly userRepo: UserRepository,
      @Inject(DynamoColaboradorRepository)
      private readonly colaboratorRepo: ColaboradorRepository,
      @Inject(CognitoAuthAdapter)
      private readonly authProvider: AuthPort
   ) { }
   async registerUser(document: string) {
      const foundColaborator = await this.colaboratorRepo.find(document);
      if (!foundColaborator) throw new NO_COLABORATOR_FOUND_ERROR;
      const providerUser = await this.authProvider.getUser(document.toString())
      if(providerUser?.enabled) throw new USER_EXIST_ERROR;
      const user = new User(foundColaborator.document, foundColaborator.document.toString(), foundColaborator.firstname, foundColaborator.lastname, foundColaborator.corporativeEmail);

      await this.authProvider.create(user);
      await this.userRepo.save(user);
      return {
         message: 'usuario creado correctamente'
      }
   }

}
