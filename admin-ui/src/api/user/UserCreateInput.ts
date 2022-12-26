import { InputJsonValue } from "../../types";
import { WishlistCreateNestedManyWithoutUsersInput } from "./WishlistCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  test?: string | null;
  username: string;
  wishlists?: WishlistCreateNestedManyWithoutUsersInput;
};
