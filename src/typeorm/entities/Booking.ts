import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// set custom name for SQL table in here if different than Class (plural)
@Entity({ name: 'bookings' })
export class Booking {
    @PrimaryGeneratedColumn({ type: 'int' })
    bookingID: number;
    
    @Column({nullable: true, unique:true})
    bookingCode: string;

    //TODO check Date or timestamp for SQL date format with time ?
    @Column({nullable: true})
    bookingDateTime: Date;

    @Column({ nullable: true })
    customerID: number;

    @Column({nullable: true})
    vehicleID: number;
    
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: string;
}