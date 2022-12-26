import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { WishlistResolverBase } from "./base/wishlist.resolver.base";
import { Wishlist } from "./base/Wishlist";
import { WishlistService } from "./wishlist.service";

@graphql.Resolver(() => Wishlist)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class WishlistResolver extends WishlistResolverBase {
  constructor(
    protected readonly service: WishlistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
