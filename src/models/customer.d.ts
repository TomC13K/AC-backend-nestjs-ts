export namespace customer {
  export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: Address;
    business: BusinessCustomer;
  }

  export interface Address {
    street: string;
    town: string;
    psc: string;
  }

  export interface BusinessCustomer {
    ico: string;
    dic: string;
  }
}
