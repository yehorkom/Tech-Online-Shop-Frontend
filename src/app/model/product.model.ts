export interface Product {

  model: string | null;
  price: number | null;
  description: string | null;
  availability?: boolean;
  image?: string;
  brandId?: number;
  typeId?: number;
}
