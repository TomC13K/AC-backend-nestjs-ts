import { VehicleTypeDto } from "./VehicleType"

export interface IVehicleModelDto {
    id_model: string;
    value_model: string;
    model: string;
    engines: VehicleTypeDto[];
}