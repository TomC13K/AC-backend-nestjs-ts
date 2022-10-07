import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/typeorm/entities/Customer';
import { Repository } from 'typeorm';
import { CreateCustomerParams } from '../../types/types';
import { UpdateCustomerDto } from '../dtos/UpdateCustomer.dto';

@Injectable()
export class CustomerService {
    // injecting repository
    constructor(@InjectRepository(Customer) private customerRepository: Repository<Customer>,) {}

    getCustomers() {
        //async
        return this.customerRepository.find();
    }

    createCustomer(customerDetails: CreateCustomerParams) {
        // create customer instance based on customerDto passed in 
        // create is not async
        const newCustomer = this.customerRepository.create({ ...customerDetails });
        // returns a promise - save is async method
        return this.customerRepository.save(newCustomer);
    }

    updateCustomer(id: number, updateCustomerDetails: UpdateCustomerDto) {
        return this.customerRepository.update( id , { ...updateCustomerDetails });
    }
}
