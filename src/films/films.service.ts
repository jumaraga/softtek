import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class FilmService {
   constructor(
      private readonly httpService: HttpService,
      private readonly configService: ConfigService,
   ) {

   }
   async getFilm(id: string) {
      try {
         const swapiHost = this.configService.getOrThrow('swapiHost');
         const res = await firstValueFrom(this.httpService.get(`${swapiHost}/films/${id}`));
         return res.data;
         
      } catch (e) {
         console.log(e)
      }
   }
}
