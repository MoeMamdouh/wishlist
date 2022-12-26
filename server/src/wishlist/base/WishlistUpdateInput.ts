/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsOptional,
  IsString,
  IsDate,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { ProductUpdateManyWithoutWishlistsInput } from "./ProductUpdateManyWithoutWishlistsInput";
import { EnumWishlistStatus } from "./EnumWishlistStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class WishlistUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  addressId?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  childName?: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  linkedPhoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProductUpdateManyWithoutWishlistsInput,
  })
  @ValidateNested()
  @Type(() => ProductUpdateManyWithoutWishlistsInput)
  @IsOptional()
  @Field(() => ProductUpdateManyWithoutWishlistsInput, {
    nullable: true,
  })
  products?: ProductUpdateManyWithoutWishlistsInput;

  @ApiProperty({
    required: false,
    enum: EnumWishlistStatus,
  })
  @IsEnum(EnumWishlistStatus)
  @IsOptional()
  @Field(() => EnumWishlistStatus, {
    nullable: true,
  })
  status?: "Option_1" | "Option_2" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}
export { WishlistUpdateInput };