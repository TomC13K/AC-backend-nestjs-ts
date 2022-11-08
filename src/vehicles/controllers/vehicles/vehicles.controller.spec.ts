import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesService } from '../../services/vehicles/vehicles.service';
import { VehiclesController } from './vehicles.controller';

describe('VehiclesController', () => {
  let controller: VehiclesController;

  const mockService = {
    deleteVehicleById: jest.fn()
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesController],
      providers: [VehiclesService],
    }).overrideProvider(VehiclesService)
      .useValue(mockService)
      .compile();

    controller = module.get<VehiclesController>(VehiclesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
