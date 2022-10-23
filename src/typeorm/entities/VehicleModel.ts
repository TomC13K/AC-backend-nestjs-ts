import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// set custom name for SQL table in here if different than Class (plural)
@Entity({ name: 'vehicleModel' })
export class VehicleModel {
    @PrimaryGeneratedColumn({ type: 'int' })
    vehicleModelID: number;

    // foreign key
    vehicleMakeID: number;

    @Column({ nullable: true })
    vehicleModel: string;

}