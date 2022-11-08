import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { VehicleDto } from '../../dtos/Vehicle.dto';
import { VehiclesService } from '../../services/vehicles/vehicles.service';

@Controller('vehicle')
export class VehiclesController {
    constructor(private vehicleService: VehiclesService) { }
    
    @Get()
    async getVehicles() {
        const vehicles = await this.vehicleService.getVehicles();
        return vehicles;
    }

    @Post()
    createVehicle(@Body() createVehicleDto: VehicleDto) {
        this.vehicleService.createVehicle(createVehicleDto);
    }

    @Put(':id')
    async updateVehicleById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateVehicleDto: VehicleDto
    ) {
        await this.vehicleService.updateVehicle(id, updateVehicleDto);
    }

    @Delete(':id')
    async deleteVehicleById(
        @Param('id', ParseIntPipe) id: number
    ) {
        await this.vehicleService.deleteVehicle(id);
        return id;
    }
}
