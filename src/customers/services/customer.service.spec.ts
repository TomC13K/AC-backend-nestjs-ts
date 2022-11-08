import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../../typeorm/entities/Customer';
import { CustomerService } from './customer.service';

// @ts-ignore
  export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  //export const repositoryMockFactory: () => Repository<any> = jest.fn(() => ({
    create: jest.fn(entity => entity),
    find: jest.fn(entity => entity),
    findOne: jest.fn(entity => entity),
    delete: jest.fn(entity => entity),
    save: jest.fn(entity => entity),
}));

describe('CustomerService', () => {
  let service: CustomerService;
  let repositoryMock: MockType<Repository<Customer>>;
  //let repositoryMock: Repository<Customer>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerService,
      // Provide your mock instead of the actual repository
        { provide: getRepositoryToken(Customer), useFactory: repositoryMockFactory },
      ],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
    repositoryMock = module.get(getRepositoryToken(Customer));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const user: Customer = { customerID: 1, firstName: 'firstDude', lastName: 'lastDude', businessName: 'business', phone: '12345678', emailName: 'email@email.com', ico: '1234', dic: '123456', street: 'street 1', town: 'town', psc: 'NM 4444', createdAt: '11/11/2021' };
    // Now you can control the return value of your mock's methods
    repositoryMock.create.mockReturnValue(user);             //methods on repositories create, findOne...
    const response = service.createCustomer({ ...user });
    expect(response).toEqual("created");
    expect(repositoryMock.create).toHaveBeenCalledWith(user);
  });
  
});

// helps to solve the types issues when mocking the entity methods
export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};
