import { Controller, Get } from '@nestjs/common';
import { CalendarService } from '../services/calendar/calendar.service';

@Controller('calendar')
export class CalendarController {
  constructor(private calendarService: CalendarService) {}

  @Get('day')
  getDayBookings() {
    return this.calendarService.getDayBookings();
  }
}
