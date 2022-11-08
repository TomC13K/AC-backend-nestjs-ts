import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../../typeorm/entities/Customer';
import { Repository } from 'typeorm';
import { CustomerDto } from '../dtos/Customer.dto';

@Injectable()
export class CustomerService {

    // injecting repository
    constructor(@InjectRepository(Customer) private customerRepository: Repository<Customer>) {}

    getCustomers() {
        //async
        return this.customerRepository.find();
    }

    createCustomer(customerDetails: CustomerDto ) : string  {
        // create customer instance based on customerDto passed in 
        // create is not async
        //TODO checks
        const newCustomer = this.customerRepository.create({ ...customerDetails });
        // returns a promise - save is async method
        this.customerRepository.save(newCustomer);
        return "created";
    }

    updateCustomer(id: number, updateCustomerDetails: CustomerDto) {
        // used spread operator so it has access to all values but only updates the provided ones
        return this.customerRepository.update( id , { ...updateCustomerDetails });
    }

    async deleteCustomer(id: number) : Promise<any> {
        //TODO checks
        return await this.customerRepository.delete(id);
    }
}
