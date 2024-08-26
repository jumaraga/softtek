import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from './shared/config/config';
import { FilmModule } from './films/films.module';
import { CharacterModule } from './characters/character.module';
import { UserModule } from './user/user.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { RetentionModule } from './retention/retention.module';
import { CustomerModule } from './context/backoffice/customer/infrastructure/customer.module';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: false,
      delimiter: '.',
      newListener: false,
      removeListener: false,
      maxListeners: 10,
      verboseMemoryLeak: false,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local'],
      load: [config]
    }),
    FilmModule,
    CharacterModule,
    UserModule,
    RetentionModule,
    CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
