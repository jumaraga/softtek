import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CharacterService } from './character.service';
import { BaseStarWarCharacterDto } from './character.dtos';

@Controller('people')
export class CharacterController {
   constructor(private readonly peopleService: CharacterService) { }

   @Post(':id/customize')
   async createCharacter(@Param('id') id:string ,@Body() characterData: BaseStarWarCharacterDto) {
      await this.peopleService.customizeCharacter(id,characterData);
      return {
         message:'customizaation successfully',
         data:{}
      }
   }

   @Get(':id')
   async getCustomizeCharacter(@Param('id') id:string){
      const res =await this.peopleService.getCustomizeCharacter(id);
      return {
         message:'customize character return successfully',
         data:{
            ...res
         }
      }
   }

}
