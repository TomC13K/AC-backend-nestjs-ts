import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from 'src/typeorm/entities/Vehicle';
import { VehiclesController } from './controllers/vehicles/vehicles.controller';
import { VehiclesService } from './services/vehicles/vehicles.service';

@Module({
  imports:[TypeOrmModule.forFeature([Vehicle])],
  controllers: [VehiclesController],
  providers: [VehiclesService],
  exports:[TypeOrmModule]
})
export class VehiclesModule {}
