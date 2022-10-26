import { VehicleTypeDto } from "./IVehicleType"

export interface IVehicleModel {
    id_model: string;
    value_model: string;
    model: string;
    engines: VehicleTypeDto[];
}