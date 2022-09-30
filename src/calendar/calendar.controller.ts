import { Body, Controller, Get, Post } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { calendar } from '../models/calendar';

@Controller('calendar')
export class CalendarController {
  constructor(private calendarService: CalendarService) {}

  @Get('day')
  getDayBookings() {
    return this.calendarService.getDayBookings();
  }

  @Post('postBooking')
  setBooking(@Body() booking: calendar.Booking) {
    return booking;
  }
}
