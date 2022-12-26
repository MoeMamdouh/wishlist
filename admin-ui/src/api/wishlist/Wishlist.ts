import { Product } from "../product/Product";
import { User } from "../user/User";

export type Wishlist = {
  addressId: number | null;
  childName: string;
  createdAt: Date;
  date: Date;
  id: string;
  linkedPhoneNumber: string | null;
  products?: Array<Product>;
  status?: "Option_1" | "Option_2" | null;
  updatedAt: Date;
  user?: User | null;
};
