import { WishlistUpdateManyWithoutProductsInput } from "./WishlistUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  imageUrl?: string;
  name?: string;
  price?: number;
  sku?: string;
  wishlist?: WishlistUpdateManyWithoutProductsInput;
};
