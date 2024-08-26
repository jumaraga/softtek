import { v4, validate } from "uuid";
import { StringValueObject } from "./string.vo";

export class Uuid extends StringValueObject {
   constructor(readonly value: string) {
      super(value);
      this.ensureIsValidUuid(value);
   }

   public static random(): Uuid {
      return new Uuid(v4());
   }

   private ensureIsValidUuid(id: string): void {
      if (!validate(id)) {
         throw new Error(`<${id}> is not a valid <${this.constructor.name}>`);
      }
   }
}