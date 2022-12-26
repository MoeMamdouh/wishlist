import { ProductUpdateManyWithoutWishlistsInput } from "./ProductUpdateManyWithoutWishlistsInput";

export type WishlistUpdateInput = {
  addressId?: number | null;
  childName?: string;
  date?: Date;
  linkedPhoneNumber?: string | null;
  products?: ProductUpdateManyWithoutWishlistsInput;
  status?: "Option_1" | "Option_2" | null;
};
