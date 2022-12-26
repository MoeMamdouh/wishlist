import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  imageUrl?: StringFilter;
  name?: StringFilter;
  price?: FloatFilter;
  sku?: StringFilter;
  wishlist?: WishlistListRelationFilter;
};
