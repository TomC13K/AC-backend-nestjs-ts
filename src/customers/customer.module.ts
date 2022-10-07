
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "src/typeorm/entities/Customer";
import { CustomerController } from "./controllers/customer.controller";
import { CustomerService } from "./services/customer.service";

@Module({
    //TypeOrm feature will have an array of entities we use in this module
    imports:[TypeOrmModule.forFeature([Customer])],
    controllers: [CustomerController],
    providers: [CustomerService],
    exports: [TypeOrmModule]
})
export class CustomerModule {}  
