import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { VehicleMake } from './VehicleMake';

// set custom name for SQL table in here if different than Class (plural)
@Entity({ name: 'vehicleModel' })
export class VehicleModel {
    @PrimaryGeneratedColumn({ type: 'int' })
    vehicleModelID: number;

    // @ManyToOne(type => MessagesThreadEntity, a => a.users)
    // @JoinColumn({
    //     name: 'thread_id',
    //     referencedColumnName: 'id'
    // })
    @OneToOne(() => VehicleMake)
    @JoinColumn()
    vehicleMakeID: VehicleMake;

    @Column({ nullable: true })
    vehicleModel: string;

}