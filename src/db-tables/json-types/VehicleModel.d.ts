import { VehicleTypeDto } from "./VehicleType"

export class VehicleModelDto {
    id_model: number;
    value_model: string;
    model: string;
    engines: VehicleTypeDto[];
}