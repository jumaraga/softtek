
import { Injectable } from '@nestjs/common';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { ConfigService } from '@nestjs/config';
import { PeopleDto } from 'src/characters/character.dtos';
import { NotCustomizedCharacterFound } from 'src/characters/errors/NotCustomizeCharacterFound.error';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

@Injectable()
export class DynamoService {
   constructor(private readonly configService: ConfigService) {

   }
   async createCharacter(characterData: PeopleDto) {
      const command = new PutCommand({
         TableName: this.configService.get('dynamodb.character'),
         Item: characterData,

      });
      const response = await docClient.send(command);
      return response;
   }

   async getCustomizeCharacter(id:string) {
      const command = new GetCommand({
         TableName: this.configService.get('dynamodb.character'),
         Key: {
            id,
         },
      });

      const response = await docClient.send(command);
      return response;
   }
   async getCustomizeCharacterToValidate(id:string){ 
      const command = new GetCommand({
         TableName: this.configService.get('dynamodb.character'),
         Key: {
            id,
         },
         ProjectionExpression:'id'
      });
      const item = await docClient.send(command);
      if(!item?.Item)throw new  NotCustomizedCharacterFound;
   }


}
