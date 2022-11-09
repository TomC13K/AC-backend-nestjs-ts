import { Test, TestingModule } from '@nestjs/testing';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

describe('DashboardController', () => {
  let dashController: DashboardController;

  const mockService = {
    showBookings: jest.fn()
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DashboardController],
      providers: [DashboardService],
    }).overrideProvider(DashboardService)
      .useValue(mockService)
      .compile();

    dashController = module.get<DashboardController>(DashboardController);
  });

  it('controller call to getDashboard returns 1!"', () => {
    mockService.showBookings.mockReturnValue(1);          // for async return otherwise use mockReturnValue
    const response = dashController.getDashboard();  
    expect(response).toEqual(1);
  });

});
