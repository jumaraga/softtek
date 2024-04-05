
import { Injectable } from '@nestjs/common';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { ConfigService } from '@nestjs/config';
import { PeopleDto } from 'src/characters/character.dtos';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

@Injectable()
export class DynamoService {
   constructor(private readonly  configService: ConfigService) {

   }
   async createCharacter(characterData: PeopleDto) {
      const command = new PutCommand({
         TableName: this.configService.get('dynamodb.character'),
         Item: characterData,
         
      });
      const response = await docClient.send(command);
      return response;
   }


}
