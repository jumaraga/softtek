import { HttpException } from "@nestjs/common";

export class NO_COLABORATOR_FOUND_ERROR extends HttpException {
   constructor() {
      super('E101', 400)
   }

}

export class COLABORATOR_INACTIVE_ERROR extends HttpException {
   constructor() {
      super('E101', 400)
   }
}

export class INVALID_DOMAIN_ERROR extends HttpException{
   constructor(){
      super('Tu correo electronico asociado posee un dominio invalido, comunicate con soporte para cambiarlo',403)
   }
}
