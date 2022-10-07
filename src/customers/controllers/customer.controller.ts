import { Controller, Get, Post, Body,Put, ParseIntPipe, Param } from '@nestjs/common';
import { CreateCustomerDto } from '../dtos/CreateCustomer.dto';
import { UpdateCustomerDto } from '../dtos/UpdateCustomer.dto';
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
        this.customerService.createCustomer(createCustomerDto);
    }

    //update 
    //parsing id to number
    @Put(':id')
    async updateCustomerById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateCustomerDto: UpdateCustomerDto
    ) {
        await this.customerService.updateCustomer(id, updateCustomerDto);
    }
    
}
