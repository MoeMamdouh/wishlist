/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WishlistWhereInput } from "./WishlistWhereInput";
import { Type } from "class-transformer";
import { WishlistOrderByInput } from "./WishlistOrderByInput";

@ArgsType()
class WishlistFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WishlistWhereInput,
  })
  @Field(() => WishlistWhereInput, { nullable: true })
  @Type(() => WishlistWhereInput)
  where?: WishlistWhereInput;

  @ApiProperty({
    required: false,
    type: [WishlistOrderByInput],
  })
  @Field(() => [WishlistOrderByInput], { nullable: true })
  @Type(() => WishlistOrderByInput)
  orderBy?: Array<WishlistOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { WishlistFindManyArgs };
