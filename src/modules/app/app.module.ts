import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from '../database/database.module';
import { DatabaseService } from '../database/database.service';
import { ApiModule } from '../api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [DatabaseModule],
      inject: [DatabaseService],
      useFactory: async (databaseService: DatabaseService) => ({
        uri: databaseService.getDatabaseUrl(),
        ...databaseService.getDatabaseOptions(),
      }),
    }),
    ApiModule,
  ],
})
export class AppModule {}
