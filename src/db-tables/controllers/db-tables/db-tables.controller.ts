import { Controller, Get, Param } from '@nestjs/common';
import { DbTablesService } from '../../services/db-tables/db-tables.service';

@Controller('db-tables')
export class DbTablesController {

    constructor(private dbTablesService: DbTablesService) { }
    
    @Get('vehicleMakesFile/:name')
    async getVehicleMake(@Param('name') vehicleMake) {
        const customers = await this.dbTablesService.getVehicleMakesAndCreateTab(vehicleMake);
        return customers
    }

    @Get('vehicleModelFile/:name')
    async getVehicleModel(@Param('name') vehicleModelFile) {
        const customers = await this.dbTablesService.getVehicleModelAndCreateTable(vehicleModelFile);
        return customers
    }
}
