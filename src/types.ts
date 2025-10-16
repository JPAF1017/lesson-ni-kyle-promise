export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
}

interface Address {
  city: string;
  zipcode: string;
}