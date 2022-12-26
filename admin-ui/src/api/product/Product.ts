import { Wishlist } from "../wishlist/Wishlist";

export type Product = {
  createdAt: Date;
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  sku: string;
  updatedAt: Date;
  wishlist?: Array<Wishlist>;
};
