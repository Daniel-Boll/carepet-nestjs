import { Inject, Injectable } from "@nestjs/common";
import { Owner } from "./owner.entity";
import type { Repository } from "@lambda-group/charydbis";
import type { CreateOwnerDto } from "./dto/create-owner.dto";
import { Uuid } from "@lambda-group/scylladb";

@Injectable()
export class OwnerService {
  constructor(
    @Inject(Owner.name)
    private readonly ownerRepository: Repository<Owner>,
  ) { }

  async findById(id: string): Promise<Owner> {
    const result = await this.ownerRepository.findBy({
      owner_id: Uuid.fromString(id)
    });

    return result?.[0];
  }

  async create({ name, address }: CreateOwnerDto) {
    const owner = new Owner();
    owner.owner_id = Uuid.randomV4();
    owner.name = name;
    owner.address = address;

    return this.ownerRepository.save(owner);
  }

  async listAll(): Promise<Owner[]> {
    return await this.ownerRepository.findAll();
  }
}
