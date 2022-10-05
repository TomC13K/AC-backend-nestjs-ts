import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// set custom name for SQL table in here if different than Class (plural)
@Entity({ name: 'vehicles' })
export class Vehicle {
    @PrimaryGeneratedColumn({ type: 'int' })
    vehicleID: number;

    @Column({nullable: true})
    vehicleLinkID: number;

    @Column({nullable: true})
    vehicleMake: string;

    @Column({nullable: true})
    vehicleModel: string;

    @Column({nullable: true})
    vehicleType: string;

    @Column({nullable: true})
    spz: string;

    @Column({nullable: true})
    enginePower: string;

    @Column({nullable: true})
    vehicleCode: string;

    @Column({nullable: true})
    yearMake: Date;

    @Column({nullable: true})
    vin: string;

    @Column({nullable: true})
    color: string;

    @Column({nullable: true})
    hasAircon: boolean;

    @Column({nullable: true})
    isHybrid: boolean;

    @Column({nullable: true})
    isElectric: boolean;

    // array
    @Column({nullable: true})
    airconCoolerType: string;

    @Column({nullable: true})
    airconFillAmount: number;

    @Column({nullable: true})
    stkEndDate: Date;

    @Column({nullable: true})
    ekEndDate: Date;

    @Column({nullable: true})
    hasAutomaticGearbox: boolean;

    @Column({nullable: true})
    automaticGearboxDataID: number;

    // array
    @Column({nullable: true})
    automaticGearboxOilType: string;

    @Column({nullable: true})
    automaticGearboxOilAmount: number;

    // array
    @Column({nullable: true})
    EngineOilType: string;

    @Column({nullable: true})
    engineOilAmount: number;

    @Column({nullable: true})
    dashDistance: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: string;
}
