import { BadRequestException, HttpException } from "@nestjs/common";

export class NotCustomizedCharacterFound extends HttpException {
   constructor(){
      super('Not customize character found',404)
   }
}