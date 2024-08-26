const { loadFeature, defineFeature } = require('jest-cucumber'); const feature = loadFeature('./../user.feature', { loadRelativePath: true, errors: true }); import { before } from 'node:test';
import { REQUEST } from '../data/input';
import { MOCK, RESPONSES } from '../data/output'
import { ConfigService } from '@nestjs/config';
import { TestingModule, Test } from '@nestjs/testing';
import { UserService } from '../../../src/user/user.service';
import { DynamoColaboradorRepository } from '../../../src/user/infrastructure/dynamoColaborador.repository';
import { DynamoUserRepository } from '../../../src/user/infrastructure/dynamoUser.repository';
import { ColaboradorRepository } from '../../../src/user/domain/repositories/colaborator.repository';
import { UserRepository } from '../../../src/user/domain/repositories/user.respository';
import { UserController } from '../../../src/user/user.controller';
import { CognitoAuthAdapter } from '../../../src/user/infrastructure/adapter/cognitoAuth.adapter';
import { AuthPort } from '../../../src/user/domain/port/auth.port';
import { EventEmitter2 } from '@nestjs/event-emitter';
beforeAll(() => jest.useFakeTimers())
const buildSolicitud = (params) => {
   return REQUEST[params]
}
let service: UserService, userRepository: UserRepository, colaboratorRepository: ColaboradorRepository, configService, request, controller: UserController, authAdapter: AuthPort;
defineFeature(feature, test => {
   test('Crear users that are working at the company', ({
      given,
      and,
      when,
      then
   }) => {
      beforeAll(async () => {
         const module: TestingModule = await Test.createTestingModule({
            providers: [
               EventEmitter2,
               DynamoColaboradorRepository,
               {
                  provide: ConfigService,
                  useValue: {
                     get: jest.fn().mockReturnValue('TABLE'), // Mock ConfigService
                  },
               },
               UserService,
               DynamoUserRepository,
               CognitoAuthAdapter
            ],
            controllers: [UserController]
         }).compile();
         controller = module.get<UserController>(UserController)
         service = module.get<UserService>(UserService);
         colaboratorRepository = module.get<ColaboradorRepository>(DynamoColaboradorRepository);
         userRepository = module.get<UserRepository>(DynamoUserRepository);
         authAdapter = module.get<AuthPort>(CognitoAuthAdapter);
         configService = module.get<ConfigService>(ConfigService);
      })
      given(/^We request the sign up endpoint (.*)$/, (arg0) => {
         request = buildSolicitud(arg0)
      });

      and(/^get the colaborators from the company (.*)$/, (arg0) => {
         mockColaboratorRepository(arg0)
      });

      and(/^verify if user already exist (.*)$/, (arg0) => {
         mockAuthProvider(arg0)
      });

      when('validate email domain', () => {

      });

      then(/^the user is created (.*)$/, async (arg0) => {
         mockUserRepository()
         const expectedResult = RESPONSES[arg0]
         try {
            console.log(request)
            const actualResult = await controller.createUser(request);
            expect(actualResult).toEqual(expectedResult);
         } catch (e) {
            expect(() => { throw e }).toThrow(expectedResult)
         }
      });

   })
})

const mockAuthProvider = (data: string) => {
   jest.spyOn(authAdapter, 'getUser').mockImplementation(
      async () => { console.log('SSSSSS',data,MOCK[data]); return MOCK[data] }
   )
   jest.spyOn(authAdapter, 'create').mockImplementation(
      async () => { }
   )
}

const mockUserRepository = () => {
   jest.spyOn(userRepository, 'save').mockImplementationOnce(
      async (user) => { return }
   )
}

const mockColaboratorRepository = (data: string) => {
   jest.spyOn(colaboratorRepository, 'find').mockImplementationOnce(
      async (user) => { console.log(data); return MOCK[data] }
   )
}