import { Injectable } from '@nestjs/common';
import { Booking } from './types';

@Injectable()
export class CalendarService {
  getDayBookings(): Booking {
    const data = {
      id: 1,
      bookingName: 'booking1',
      myArray: [],
    };

    console.log('');
    return data;
  }
}
