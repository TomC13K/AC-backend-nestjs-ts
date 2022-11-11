import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from '../../../typeorm/entities/Vehicle';
import { VehiclesService } from './vehicles.service';

// @ts-ignore
  export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  //export const repositoryMockFactory: () => Repository<any> = jest.fn(() => ({
    create: jest.fn(entity => entity),
    find: jest.fn(entity => entity),
    findOne: jest.fn(entity => entity),
    delete: jest.fn(entity => entity),
    save: jest.fn(entity => entity),
}));

describe('VehiclesService', () => {
  let service: VehiclesService;
  let repositoryMock: MockType<Repository<Vehicle>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesService,
      { provide: getRepositoryToken(Vehicle), useFactory: repositoryMockFactory },
      ],
    }).compile();

    service = module.get<VehiclesService>(VehiclesService);
    repositoryMock = module.get(getRepositoryToken(Vehicle));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a vehicle', async () => {
      
      const vehicle: Vehicle = {
        vehicleID: 1,
        vehicleMake: "make",
        vehicleModel: "model",
        vehicleType: "type",
        spz: "KE 1234",
        enginePower: "120kW",
        vehicleCode: "TFSi",
        yearMake: new Date(2020, 1, 1),
        vin: "VIN1234556658",
        color: "red",
        hasAircon: false,
        isHybrid: false,
        isElectric: false,
        airconCoolerType: "RJ456",
        airconFillAmount: 3.2,
        stkEndDate: new Date(2021,5,5),
        ekEndDate: new Date(2021,5,6),
        hasAutomaticGearbox: true,
        automaticGearboxDataID: 12,
        automaticGearboxOilType: "OIL 123",
        automaticGearboxOilAmount: 4,
        engineOilType: "W5-30",
        engineOilAmount: 6.3,
        dashDistance: 130000,
        createdAt: "2020-1-1"
      };
    // Now you can control the return value of your mock's methods
    repositoryMock.create.mockReturnValue(vehicle);             //methods on repositories create, findOne...
    const response = service.createVehicle({ ...vehicle });
    expect(response).toEqual("created");
    expect(repositoryMock.create).toHaveBeenCalledWith(vehicle);
  });
});

// helps to solve the types issues when mocking the entity methods
export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};
