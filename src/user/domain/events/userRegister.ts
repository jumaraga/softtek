import { DomainEvent } from "src/shared/domain/domainEvent";

export class UserRegisterDomainEvent extends DomainEvent {
   static eventName = "user.registered";
   constructor(
      public readonly id: string,
      public readonly firstname: string,
      public readonly lastname: string,
      public readonly corporativeEmail: string,
      public readonly status: string,
      eventId?: string,
      occuredOn?: Date
   ) { super(UserRegisterDomainEvent.eventName,eventId,occuredOn) }
}
