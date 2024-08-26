import { Identifier } from "src/shared/domain/valueObject/identifier.vo";

export class CustomerDocument extends Identifier {
   constructor(value) {
      super(value)
   }

   ensureIsValidDocument(value:string) {
      if (!Number(value)) throw new Error('not valid document')
   }

}