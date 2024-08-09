import { Injectable } from '@nestjs/common';
import { GetCommand, GetCommandInput } from "@aws-sdk/lib-dynamodb";
import { ConfigService } from '@nestjs/config';
import { ColaboradorRepository } from '../domain/repositories/colaborator.repository';
import { dynamoClient } from 'src/shared/dynamo';
import { Colaborador } from '../domain/entities/colaborador.entity';


@Injectable()
export class DynamoColaboradorRepository implements ColaboradorRepository {
   constructor(private readonly configService: ConfigService) { }
   async find(document: string) {
      try{
      const params: GetCommandInput = {
         TableName: this.configService.get('COLABORATOR_TABLE'),
         Key: {
            document
         }
      }
      const getCommand = new GetCommand(params);
      const response = await dynamoClient.send(getCommand);
      if (!response?.Item) return null;
      return response.Item as Colaborador;}
      catch(e){
         console.log(e)
      }
   }
}