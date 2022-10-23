import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleMake } from 'src/typeorm/entities/VehicleMake';
import { VehicleModel } from 'src/typeorm/entities/VehicleModel';
import { VehicleType } from 'src/typeorm/entities/VehicleType';
import { DbTablesController } from './controllers/db-tables/db-tables.controller';
import { DbTablesService } from './services/db-tables/db-tables.service';

@Module({
    imports:[TypeOrmModule.forFeature([VehicleMake,VehicleModel,VehicleType])],
    controllers: [DbTablesController],
    providers: [DbTablesService],
    exports: [TypeOrmModule]
})
export class DbTablesModule {}
