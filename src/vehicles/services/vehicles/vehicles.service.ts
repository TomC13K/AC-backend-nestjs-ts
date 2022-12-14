import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleDto } from '../../dtos/Vehicle.dto';
import { Vehicle } from '../../../typeorm/entities/Vehicle';
import { Repository } from 'typeorm';

@Injectable()
export class VehiclesService {

    constructor(@InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>) { }
    
    getVehicles() {
        return this.vehicleRepository.find();
    }

    createVehicle(vehicleDetails: VehicleDto) : string{
        const newVehicle = this.vehicleRepository.create({ ...vehicleDetails });
        this.vehicleRepository.save(newVehicle);
        return "created";
    }

    updateVehicle(id: number, updateVehicleDetails: VehicleDto) {
        return this.vehicleRepository.update(id, { ...updateVehicleDetails });
    }

    deleteVehicle(id: number) {
        return this.vehicleRepository.delete(id);
    }
}
