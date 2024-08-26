import { Injectable } from '@nestjs/common';
import { PutCommand, PutCommandInput } from "@aws-sdk/lib-dynamodb";
import { ConfigService } from '@nestjs/config';
import { UserRepository } from '../domain/repositories/user.respository';
import { User } from '../domain/entities/user.entity';
import { dynamoClient } from '../../shared/dynamo';


@Injectable()
export class DynamoUserRepository implements UserRepository {
   constructor(private readonly configService: ConfigService) { }
   async save(newUser: User): Promise<void> {
      const params: PutCommandInput = {
         TableName: this.configService.get('dynamodb.user'),
         Item: newUser
      }
      const command = new PutCommand(params);
      await dynamoClient.send(command);
   }

}