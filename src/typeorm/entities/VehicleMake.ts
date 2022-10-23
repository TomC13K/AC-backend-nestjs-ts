import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// set custom name for SQL table in here if different than Class (plural)
@Entity({ name: 'vehicleMake' })
export class VehicleMake {
    @PrimaryGeneratedColumn({ type: 'int' })
    vehicleMakeID: number;

    @Column({ nullable: true })
    vehicleMake: string;

}