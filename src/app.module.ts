import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { FilmModule } from './films/films.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath:['.env.local'],
    load: [config]
  }),
   FilmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
