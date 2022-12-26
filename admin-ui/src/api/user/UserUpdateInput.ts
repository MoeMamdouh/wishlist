import { InputJsonValue } from "../../types";
import { WishlistUpdateManyWithoutUsersInput } from "./WishlistUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  test?: string | null;
  username?: string;
  wishlists?: WishlistUpdateManyWithoutUsersInput;
};
