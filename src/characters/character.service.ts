
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { BaseStarWarCharacterDto, PeopleDto, SwapiPeopleDto } from './character.dtos';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { Console } from 'console';
import { DynamoService } from 'src/dynamo/dynamo.service';
import { characterFactory } from './character.factory';

@Injectable()
export class CharacterService {
   constructor(
      private readonly httpService: HttpService,
      private readonly configService: ConfigService,
      private readonly dynamoService: DynamoService,
   ) { }
   async customizeCharacter(id: string, customization: BaseStarWarCharacterDto) {
      await this.validateIfCharacterExist(id)
      const people = await this.getCharacterFromFromSWAPI(id);
      const buildCharacter = characterFactory(people);
      const res = await this.saveCustomize(id, buildCharacter, customization)
      return res;
   }

   async validateIfCharacterExist(id: string) {
      try {
         const url = `${this.configService.get('swapiHost')}/people/${id}/`
         const res = await firstValueFrom(this.httpService.get(url));
         console.log(res.data)
         return res.data;
      } catch (e) {
         console.log(e);
      }
   }

   async saveCustomize(id: string, baseCharacter: PeopleDto, customizeAttributes: BaseStarWarCharacterDto) {
      const newCharacter = { id, ...baseCharacter, ...customizeAttributes }

      await this.dynamoService.createCharacter(newCharacter)

   }

   async getCharacterFromFromSWAPI(id: string): Promise<SwapiPeopleDto> {

      const url = `${this.configService.get('swapiHost')}/people/${id}/`
      const res = await firstValueFrom(this.httpService.get(url));
      return res.data;
   }

   
   async getCustomizeCharacter(id:string){
      await this.dynamoService.getCustomizeCharacterToValidate(id)
      const item = await this.dynamoService.getCustomizeCharacter(id)
      return item.Item
   }


}
