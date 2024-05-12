export interface Product {

  model: string | null;
  price: number | null;
  descriptionUA: string | null;
  descriptionPL: string | null;
  availability?: boolean;
  image?: string;
  brandId?: number;
  typeId?: number;
}
