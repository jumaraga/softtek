import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "./domain/repositories/user.respository";
import { DynamoUserRepository } from "./infrastructure/dynamoUser.repository";
import { ColaboradorRepository } from "./domain/repositories/colaborator.repository";
import { DynamoColaboradorRepository } from "./infrastructure/dynamoColaborador.repository";
import { NO_COLABORATOR_FOUND_ERROR } from "./domain/errors";
import { User } from "./domain/entities/user.entity";
@Injectable()
export class UserService {
   constructor(
      @Inject(DynamoUserRepository)
      private readonly userRepo: UserRepository,
      @Inject(DynamoColaboradorRepository)
      private readonly colaboratorRepo: ColaboradorRepository
   ) { }
   async registerUser(document: string) {
      const foundColaborator = await this.colaboratorRepo.find(document);
      if (!foundColaborator) throw new NO_COLABORATOR_FOUND_ERROR;

      const user = new User(foundColaborator.document, foundColaborator.document.toString(), foundColaborator.firstname, foundColaborator.lastname, foundColaborator.corporativeEmail);

      await this.userRepo.save(user);
      return {
         message: 'usuario creado correctamente'
      }
   }

}
