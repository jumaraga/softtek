import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { CharacterController } from "./character.controller.";
import {  DynamoService } from "src/dynamo/dynamo.service";
import { CharacterService } from "./character.service";

@Module({
   imports: [HttpModule.register({
      timeout: 3000,
      maxRedirects: 3,
   })],
   controllers: [CharacterController],
   providers: [CharacterService,DynamoService],
})
export class CharacterModule { }
