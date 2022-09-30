import { Injectable } from '@nestjs/common';
import { calendar } from '../models/calendar';
import mockBooking from '../mockData/mockBooking.json';

@Injectable()
export class CalendarService {
  getDayBookings(): calendar.Booking {
    const bookingData = <calendar.Booking>mockBooking;
    return bookingData;
  }
}
