import {
  Column,
  ColumnType,
  Model,
  PrimaryKeyProp,
} from "@lambda-group/charydbis";
import type { Uuid } from "@lambda-group/scylladb";

@Model("pet")
export class Pet {
  @Column({
    name: "owner_id",
    type: ColumnType.UUID,
    partitionKey: true,
  })
  owner_id: Uuid;

  @Column({
    name: "owner_id",
    type: ColumnType.UUID,
    clusteringKey: true,
    clusteringKeySequence: 1,
  })
  pet_id: Uuid;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  age: number;

  @Column()
  breed: string;

  @Column()
  color: string;

  @Column()
  species: string;

  // @Column()
  // chip_id: string;

  @Column({ type: ColumnType.FLOAT })
  weight: number

  @Column()
  gender: string;

  [PrimaryKeyProp]?: [["owner_id"], ["pet_id"]];
}
