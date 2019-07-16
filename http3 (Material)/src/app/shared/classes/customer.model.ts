export class Customer {
  id: string;
  guid: string;
  isActive: boolean;
  balance: string;
  age: number;
  eyeColor: string;
  name: {
    first: string;
    last: string;
  };
  gender: string;
  picture: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  latitude: number;
  longitude: number;
  greeting: string;
  invoices: [
    {
      invid: string;
      description: string;
      items: [
        {
          key: number;
          value: string;
        }
      ]
    }
  ];
}
