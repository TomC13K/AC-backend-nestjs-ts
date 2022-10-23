import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleMake } from 'src/typeorm/entities/VehicleMake';
import { Repository } from 'typeorm';
import { readFileSync, promises as fsPromises } from 'fs';
import { IVehicleMakeDto } from 'src/db-tables/json-types/VehicleMake';

@Injectable()
export class DbTablesService {

    constructor(@InjectRepository(VehicleMake) private vehicleMakeRepository: Repository<VehicleMake>) { }
    
    getVehicleMakesAndCreateTab(name: string) {
        //let result = this.syncReadFile(name);
        let result = this.asyncReadFile(name);
        return result;
    }

    getVehicleModelAndCreateTable(name: string) {
        return name;
    }

    syncReadFile(fileName: string) {
        const path = "./src/db-tables/sourceFiles/list_" + fileName + ".json";
        const result = readFileSync(path, 'utf-8');
        let finalModel: Array<IVehicleMakeDto> = JSON.parse(result);
        console.log(finalModel[0].id_vyr);
        return finalModel;
    }


    async asyncReadFile(fileName: string) {
        let path = "./src/db-tables/sourceFiles/list_" + fileName + ".json";
        try {
            const result = await fsPromises.readFile(
                path,
                'utf-8'
            );
            //console.log(result);
            let finalModel: Array<IVehicleMakeDto> = JSON.parse(result);
            console.log(finalModel[0].id_vyr);
            return finalModel;
        } catch (err) {
            console.log(err);
            return 'Something went wrong '
        }
    }
    

}
