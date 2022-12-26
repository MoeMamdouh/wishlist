import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type WishlistWhereInput = {
  addressId?: IntNullableFilter;
  childName?: StringFilter;
  date?: DateTimeFilter;
  id?: StringFilter;
  linkedPhoneNumber?: StringNullableFilter;
  products?: ProductListRelationFilter;
  status?: "Option_1" | "Option_2";
};
