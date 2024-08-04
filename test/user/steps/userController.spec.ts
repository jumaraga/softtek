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
import { NO_COLABORATOR_FOUND_ERROR } from '../../../src/user/domain/errors';
beforeAll(() => jest.useFakeTimers())
defineFeature(feature, test => {
   test('Crear usuarios que son colaboradores de la empresa', ({ given, and, when, then }) => {
      let service: UserService, userRepository: UserRepository, colaboratorRepository: ColaboradorRepository, configService, request, controller: UserController, result;
      beforeAll(async () => {
         const module: TestingModule = await Test.createTestingModule({
            providers: [
               DynamoColaboradorRepository,
               {
                  provide: ConfigService,
                  useValue: {
                     get: jest.fn().mockReturnValue('TABLE'), // Mock ConfigService
                  },
               },
               UserService,
               DynamoUserRepository
            ],
            controllers: [UserController]
         }).compile();
         controller = module.get<UserController>(UserController)
         service = module.get<UserService>(UserService);
         colaboratorRepository = module.get<ColaboradorRepository>(DynamoColaboradorRepository);
         userRepository = module.get<UserRepository>(DynamoUserRepository);
         configService = module.get<ConfigService>(ConfigService);
      })


      given(/^Se solicita el servicio en vista de registro (.*)$/, async (arg0) => {
         request = buildSolicitud(arg0)
      });

      and(/^se obtiene los colaboradores de la empresa (.*)$/, (arg0) => {
         jest.spyOn(colaboratorRepository, 'find')
            .mockImplementation(() => MOCK[arg0])
      });

      when('se valida dominio del correo', () => {
         // validation = jest.spyOn(service, '')
      });

      then(/^se crea el usuario (.*)$/, async (arg0) => {
         jest.spyOn(userRepository, 'save').mockImplementation(async (s) => {
         })
         const expectedResult = RESPONSES[arg0];
         try {
            result = await controller.createUser(request);
            expect(result).toEqual(expectedResult);
         } catch (e) {
            console.log(e, expectedResult)
            expect(() => { throw e }).toThrow(expectedResult)
         }
      });
   })
})

const buildSolicitud = (params) => {
   return REQUEST[params]
}