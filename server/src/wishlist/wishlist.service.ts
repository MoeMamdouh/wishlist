import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { WishlistServiceBase } from "./base/wishlist.service.base";

@Injectable()
export class WishlistService extends WishlistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
