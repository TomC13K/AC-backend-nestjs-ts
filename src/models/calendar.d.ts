import { customer } from './customer';

export namespace calendar {
  export interface Booking {
    id: number;
    bookingName: string;
    myArray: Array;
    customer: customer.Customer;
  }

  export interface Day {
    id: number;
    startTime: number;
    bookings: Booking[];
  }

  export interface Week {
    id: number;
    days: Day[];
  }

  export interface Month {
    id: number;
    weeks: Week[];
  }
}
