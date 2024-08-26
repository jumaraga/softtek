import { v4 } from "uuid"
export abstract class DomainEvent {

   public readonly eventId: string;
   public readonly occuredOn: Date;
   constructor(
      public readonly evenName: string,
      eventId?: string,
      occuredOn?: Date
   ) {
      this.eventId = eventId ?? v4();
      this.occuredOn = occuredOn ?? new Date();
   }

}