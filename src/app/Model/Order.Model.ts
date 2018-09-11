
export interface Order {
  id: number;
  name: string;
  surname: string;
  address: string;
  city: string;
  postalCode: string;
  telephone: string;
  dishIds: number[];
  price: number;
}
