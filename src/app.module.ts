import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from './shared/config/config';
import { FilmModule } from './films/films.module';
import { CharacterModule } from './characters/character.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env.local'],
    load: [config]
  }),
    FilmModule,
    CharacterModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
