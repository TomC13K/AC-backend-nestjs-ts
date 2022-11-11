import { Test, TestingModule } from '@nestjs/testing';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';

describe('CalendarController', () => {
  let calendarController: CalendarController;

  const mockService = {
    getDayBookings: jest.fn()
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalendarController],
      providers:[CalendarService]
    }).overrideProvider(CalendarService)
      .useValue(mockService)
      .compile();

    calendarController = module.get<CalendarController>(CalendarController);
  });

  describe('calendar controller methods', () => {
    it('getDayBookings should return 1"', () => {
      mockService.getDayBookings.mockReturnValue("1");          // for async return otherwise use mockReturnValue
      const response = calendarController.getDayBookings();  
      expect(response).toEqual('1');
    });
  });

});
