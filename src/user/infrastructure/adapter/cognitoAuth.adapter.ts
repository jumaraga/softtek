import { AdminCreateUserCommand, AdminCreateUserCommandInput, AdminGetUserCommand, CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { User } from "src/user/domain/entities/user.entity";
import { AuthPort } from "src/user/domain/port/auth.port";
const client = new CognitoIdentityProviderClient({ region: process.env.COGNITO_REGION })
@Injectable()
export class CognitoAuthAdapter implements AuthPort {
   constructor(
      private readonly configService: ConfigService
   ) { }
   async create(user: User) {
      const input: AdminCreateUserCommandInput = {
         Username: user.document.toString(),
         UserAttributes: [{
            Name: 'email',
            Value: user.corporativeEmail
         },
         {
            Name: 'nickname',
            Value: user.document.toString(),
         },
         {
            Name: 'given_name',
            Value: user.firstname,
         },
         {
            Name: 'family_name',
            Value: user.lastname
         }],
         UserPoolId: this.configService.get('cognito.userPoolId')
      }
      const command = new AdminCreateUserCommand(input)
      await client.send(command)
   }
   async getUser(
      username: string,
   ) {
      try {
         const input = {
            UserPoolId: this.configService.get('cognito.userPoolId'),
            Username: username,
         };
         const command = new AdminGetUserCommand(input);
         const cognitoMobileUser = await client.send(command)
         return {
            status: cognitoMobileUser.UserStatus,
            enabled: cognitoMobileUser.Enabled
         }
      } catch (e) {
         console.log(e)
         return null;
      }
   }
}
