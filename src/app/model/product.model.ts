export interface Product {

  model: string;
  description: string;
  price: number;
  availability: boolean;
  image?: string;
  brandId?: number;
  typeId?: number;
}
