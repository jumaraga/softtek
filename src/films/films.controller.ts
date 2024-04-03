import { Body, Controller, Get, Param } from '@nestjs/common';
import { FilmService } from './films.service';

@Controller('films')
export class FilmController {
   constructor(private readonly filmService: FilmService) { }

   @Get(':id')
   getFilmById(@Param('id') id: string) {
      return this.filmService.getFilm(id);
   }
}
