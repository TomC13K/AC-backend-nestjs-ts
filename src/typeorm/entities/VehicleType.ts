import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// set custom name for SQL table in here if different than Class (plural)
@Entity({ name: 'vehicleType' })
export class VehicleType {
    @PrimaryGeneratedColumn({ type: 'int' })
    vehicleTypeID: number;

    // foreign key
    vehicleModelID: number;

    @Column({ nullable: true })
    vehicleType: string;

}