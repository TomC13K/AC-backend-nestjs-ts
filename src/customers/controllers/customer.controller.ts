import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCustomerDto } from '../dtos/CreateCustomer.dto';
import { CustomerService } from '../services/customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService){}

    @Get()
    getCustomer() { }
    
    @Post()
    createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        this.customerService.createCustomer(createCustomerDto);
    }
    
}
