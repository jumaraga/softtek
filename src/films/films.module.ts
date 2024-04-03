import { Module } from "@nestjs/common";
import { FilmController } from "./films.controller";
import { FilmService } from "./films.service";
import { HttpModule } from "@nestjs/axios";

@Module({
   imports: [HttpModule.register({
      timeout: 3000,
      maxRedirects: 3,
   })],
   controllers: [FilmController],
   providers: [FilmService],
})
export class FilmModule { }
