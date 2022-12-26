import { WishlistCreateNestedManyWithoutProductsInput } from "./WishlistCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  imageUrl: string;
  name: string;
  price: number;
  sku: string;
  wishlist?: WishlistCreateNestedManyWithoutProductsInput;
};
