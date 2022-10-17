import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleDto } from 'src/vehicles/dtos/Vehicle.dto';
import { Vehicle } from 'src/typeorm/entities/Vehicle';
import { Repository } from 'typeorm';

@Injectable()
export class VehiclesService {

    constructor(@InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>) { }
    
    getVehicles() {
        return this.vehicleRepository.find();
    }

    createVehicle(vehicleDetails: VehicleDto) {
        const newVehicle = this.vehicleRepository.create({ ...vehicleDetails });
        return this.vehicleRepository.save(newVehicle);
    }

    updateVehicle(id: number, updateVehicleDetails: VehicleDto) {
        return this.vehicleRepository.update(id, { ...updateVehicleDetails });
    }

    deleteVehicle(id: number) {
        return this.vehicleRepository.delete(id);
    }
}
