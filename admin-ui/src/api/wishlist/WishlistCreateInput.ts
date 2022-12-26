import { ProductCreateNestedManyWithoutWishlistsInput } from "./ProductCreateNestedManyWithoutWishlistsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistCreateInput = {
  addressId?: number | null;
  childName: string;
  date: Date;
  linkedPhoneNumber?: string | null;
  products?: ProductCreateNestedManyWithoutWishlistsInput;
  status?: "Option_1" | "Option_2" | null;
  user?: UserWhereUniqueInput | null;
};
