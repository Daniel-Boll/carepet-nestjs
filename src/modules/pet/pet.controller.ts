import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PetService } from "./pet.service";

import type { Pet } from "./pet.entity";
import { CreatePetDto } from "./dto/create-pet.dto";

@Controller("pet")
export class PetController {
  constructor(private readonly petService: PetService) { }

  @Get()
  async listAll(): Promise<Pet[]> {
    return this.petService.listAll();
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return this.petService.findByOwnerId(id);
  }

  @Post()
  async create(@Body() body: CreatePetDto) {
    return this.petService.create(body);
  }
}
