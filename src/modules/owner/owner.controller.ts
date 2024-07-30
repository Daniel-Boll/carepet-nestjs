import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import type { CreateOwnerDto } from "./dto/create-owner.dto";

import { OwnerService } from "./owner.service";
import type { Owner } from "./owner.entity";

@Controller("owner")
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) { }

  @Get()
  async listAll(): Promise<Owner[]> {
    return this.ownerService.listAll();
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return this.ownerService.findById(id);
  }

  @Post()
  async create(@Body() body: CreateOwnerDto) {
    return this.ownerService.create(body);
  }
}
