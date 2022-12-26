import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WishlistTitle } from "../wishlist/WishlistTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
