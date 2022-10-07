import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCustomerDto } from '../dtos/CreateCustomer.dto';
import { CustomerService } from '../services/customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService){}

    @Get()
    async getCustomers() {
        const customers = await this.customerService.getCustomers();
        return customers
    }
    
    @Post()
    createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        //TODO remove return for prod, only to see response now during dev stage
        return this.customerService.createCustomer(createCustomerDto);
    }
    
}
