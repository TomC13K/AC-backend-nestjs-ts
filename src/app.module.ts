import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalendarService } from './calendar/calendar.service';
import { CalendarController } from './calendar/calendar.controller';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helper/env.helper';
import { TypeOrmModule } from '@nestjs/typeorm';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath, isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type:'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DBNAME,
      entities: [],
      synchronize: true,
  })],
  controllers: [AppController, CalendarController, DashboardController],
  providers: [AppService, CalendarService, DashboardService],
})
export class AppModule {}

/* synchronize: true  - use only for development as its syncs the DB with all new columns created or changed
 NOT FOR PRODUCTION so set it to false!!!

ConfigModule is imported here globally so we only inject it in the modules we need later
*/