import { Controller, Get, Post, Body,Put, ParseIntPipe, Param, Delete } from '@nestjs/common';
import { CustomerDto } from '../dtos/Customer.dto';
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
    createCustomer(@Body() createCustomerDto: CustomerDto) {
        this.customerService.createCustomer(createCustomerDto);
    }

    //update 
    //parsing id to number
    @Put(':id')
    async updateCustomerById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateCustomerDto: CustomerDto
    ) {
        await this.customerService.updateCustomer(id, updateCustomerDto);
    }
    
    @Delete(':id')
    async deleteCustomerById(
        @Param('id', ParseIntPipe) id: number
    ) {
        await this.customerService.deleteCustomer(id);
    }
}
