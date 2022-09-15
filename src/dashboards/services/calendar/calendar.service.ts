import { Injectable } from '@nestjs/common';

@Injectable()
export class CalendarService {
  getDayBookings() {
    return {
      id: 1,
      bookingName: 'booking1',
    };
  }
}
