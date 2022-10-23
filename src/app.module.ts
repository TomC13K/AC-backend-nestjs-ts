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
import { Customer } from './typeorm/entities/Customer';
import { Vehicle } from './typeorm/entities/Vehicle';
import { Booking } from './typeorm/entities/Booking';
import { CustomerController } from './customers/controllers/customer.controller';
import { CustomerService } from './customers/services/customer.service';
import { CustomerModule } from './customers/customer.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { DbTablesModule } from './db-tables/db-tables.module';

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
      entities: [Customer,Vehicle,Booking],
      synchronize: true,
  }),
    CustomerModule,
    VehiclesModule,
    DbTablesModule
  ],
  controllers: [AppController, CalendarController, DashboardController, CustomerController],
  providers: [AppService, CalendarService, DashboardService, CustomerService],
})
export class AppModule {}

/* synchronize: true  - use only for development as its syncs the DB with all new columns created or changed
 NOT FOR PRODUCTION so set it to false!!!

ConfigModule is imported here globally so we only inject it in the modules we need later
*/