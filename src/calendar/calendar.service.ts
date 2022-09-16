import { Injectable } from '@nestjs/common';
import { Booking } from './types-calendar';

@Injectable()
export class CalendarService {
  getDayBookings(): Booking {
    const data = {
      id: 1,
      bookingName: 'booking-olala',
      myArray: [],
    };

    console.log('');
    return data;
  }
}
