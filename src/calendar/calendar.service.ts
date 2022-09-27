import { Injectable } from '@nestjs/common';
import { calendar } from './calendar';

@Injectable()
export class CalendarService {
  getDayBookings(): calendar.Booking {
    const data = {
      id: 1,
      bookingName: 'booking-olala',
      myArray: [],
      customer: {
        id: 123,
        firstName: 'testName',
        lastName: 'testSurname',
        phone: '01234567897',
        email: 'lala@test.com',
        address: {
          street: 'street 123 test',
          town: 'town test',
          psc: '911 111',
        },
      },
    };

    return data;
  }
}
