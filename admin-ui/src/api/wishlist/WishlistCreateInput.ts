import { ProductCreateNestedManyWithoutWishlistsInput } from "./ProductCreateNestedManyWithoutWishlistsInput";

export type WishlistCreateInput = {
  addressId?: number | null;
  childName: string;
  date: Date;
  linkedPhoneNumber?: string | null;
  products?: ProductCreateNestedManyWithoutWishlistsInput;
  status?: "Option_1" | "Option_2" | null;
};
