import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleMake } from '../../../typeorm/entities/VehicleMake';
import { Repository } from 'typeorm';
import { readFileSync, promises as fsPromises } from 'fs';
import { IVehicleMake } from '../../json-types/IVehicleMake';
import { VehicleModel } from '../../../typeorm/entities/VehicleModel';
import { VehicleType } from '../../../typeorm/entities/VehicleType';

@Injectable()
export class DbTablesService {

    constructor(@InjectRepository(VehicleMake) private vehicleMakeRepository: Repository<VehicleMake>,
        @InjectRepository(VehicleModel) private vehicleModelRepository: Repository<VehicleModel>,
        @InjectRepository(VehicleType) private vehicleTypeRepository: Repository<VehicleType>) { }
    
    getVehicleMakesAndCreateTab(name: string) {
        let result = this.syncReadFile(name);
        //let result = this.asyncReadFile(name);
        this.writeVehicleMakesToDB(result);
        return result;
    }

    getVehicleModelAndCreateTable(name: string) {
        return name;
    }

    syncReadFile(fileName: string) {
        const path = "./src/db-tables/sourceFiles/list_" + fileName + ".json";
        const result = readFileSync(path, 'utf-8');
        let finalModel: IVehicleMake[] = JSON.parse(result);
        return finalModel;
    }

    async writeVehicleMakesToDB(data: IVehicleMake[]) {
        let vehicleMakes: VehicleMake[] = await this.mapItemsToVehicleMakeEntity(data);
        vehicleMakes.forEach(vehicle => {
        console.log("in ", vehicle.vehicleMake)
        this.writeToDb(vehicle)
        });
        //return "Written to DB"
    }
    
    async writeToDb(vehicle: VehicleMake) {
        const newVehicleMake = this.vehicleMakeRepository.create({ ...vehicle });
        await this.vehicleMakeRepository.save(newVehicleMake);
    }

    mapItemsToVehicleMakeEntity(data: IVehicleMake[]) {
        const vehicleMakes: VehicleMake[] = [];
        data.forEach((item) => {
        const vehicleMake = new VehicleMake();

        vehicleMake.vehicleMake = item.vyrobca;
        vehicleMakes.push(vehicleMake);
        })
        return vehicleMakes
    }


    // async asyncReadFile(fileName: string) {
    //     let path = "./src/db-tables/sourceFiles/list_" + fileName + ".json";
    //     try {
    //         const result = await fsPromises.readFile(
    //             path,
    //             'utf-8'
    //         );
    //         //console.log(result);
    //         let finalModel: IVehicleMakeDto[] = JSON.parse(result);
    //         console.log(finalModel[0].id_vyr);
    //         return finalModel;
    //     } catch (err) {
    //         console.log(err);
    //         return 'Something went wrong '
    //     }
    // }

    

    // QUERY CREATE
    // createConnection().then(async connection => { 
    //     await getConnection().createQueryBuilder()   .insert() 
    //     .into(Customer)  
    //     .values([ { name: "Adam",age:11}, 
    //          { name: "David",age:12} ]) .execute(); 
    //     }).catch(error => console.log(error));

}
