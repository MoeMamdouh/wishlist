import { Wishlist as TWishlist } from "../api/wishlist/Wishlist";

export const WISHLIST_TITLE_FIELD = "childName";

export const WishlistTitle = (record: TWishlist): string => {
  return record.childName || record.id;
};
