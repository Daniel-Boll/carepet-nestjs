import { Inject, Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { CreatePetDto } from './dto/create-pet.dto';
import { Repository } from '@lambda-group/charydbis';
import { Uuid } from '@lambda-group/scylladb';

@Injectable()
export class PetService {
  constructor(
    @Inject(Pet.name)
    private readonly petRepository: Repository<Pet>,
  ) { }

  async findByOwnerId(id: string): Promise<Pet[]> {
    const result = await this.petRepository.findBy({
      owner_id: Uuid.fromString(id)
    });

    return result;
  }

  async listAll(): Promise<Pet[]> {
    return await this.petRepository.findAll();
  }

  async create(body: CreatePetDto) {
    const pet = new Pet();
    Object.assign(pet, {
      pet_id: Uuid.randomV4(),
      owner_id: Uuid.fromString(body.owner_id),
      ...body,
    });
  }
}
