import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// set custom name for SQL table in here if different than Class (plural)
@Entity({ name: 'customers' })
export class Customer {
    @PrimaryGeneratedColumn({type:'int'})
    customerID: number;

    @Column({nullable: true})
    firstName: string;

    @Column({nullable: true})
    lastName: string;

    @Column({nullable: true})
    businessName: string;

    @Column({nullable: true})
    phone: string;

    @Column({nullable: true})
    emailName: string;

    @Column({nullable: true})
    ico: string;

    @Column({nullable: true})
    dic: string;

    @Column({nullable: true})
    street: string;

    @Column({nullable: true})
    town: string;

    @Column({nullable: true})
    psc: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: string;
}