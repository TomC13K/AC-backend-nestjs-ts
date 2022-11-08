import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from '../services/customer.service';
import { CustomerController } from './customer.controller';

describe('CustomerController', () => {
  let controller: CustomerController;

  const mockService = {
    deleteCustomer: jest.fn()
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers:[CustomerService]
    }).overrideProvider(CustomerService)
      .useValue(mockService)
      .compile();

    controller = module.get<CustomerController>(CustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('delete Customer with provided ID', async () => {
    mockService.deleteCustomer.mockResolvedValue(1);          // for async return otherwise use mockReturnValue
    const response = await controller.deleteCustomerById(1);  // need to await value before assertion
    expect(response).toEqual(1);
  })
});
