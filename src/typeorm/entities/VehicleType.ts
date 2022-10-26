import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { VehicleModel } from './VehicleModel';

// set custom name for SQL table in here if different than Class (plural)
@Entity({ name: 'vehicleType' })
export class VehicleType {
    @PrimaryGeneratedColumn({ type: 'int' })
    vehicleTypeID: number;

    @OneToOne(() => VehicleModel)
    @JoinColumn()
    vehicleModelID: VehicleModel;

    @Column("text",{ nullable: true })
    vehicleType: string;

}