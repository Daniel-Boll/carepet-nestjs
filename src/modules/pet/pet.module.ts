import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { OrmModule } from 'src/shared/orm/orm.module';
import { Consistency } from '@lambda-group/scylladb';
import { Pet } from './pet.entity';

@Module({
  imports: [
    OrmModule.forRoot(
      {
        nodes: ["localhost:9042"],
        keyspace: "carepet",
        defaultExecutionProfile: {
          consistency: Consistency.LocalQuorum,
        },
      },
      [Pet],
    ),
  ],
  controllers: [PetController],
  providers: [PetService],
})
export class PetModule { }
