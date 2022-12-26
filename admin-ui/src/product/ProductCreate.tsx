import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WishlistTitle } from "../wishlist/WishlistTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="image_url" source="imageUrl" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <TextInput label="sku" source="sku" />
        <ReferenceArrayInput
          source="wishlist"
          reference="Wishlist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WishlistTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
