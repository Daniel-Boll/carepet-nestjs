import {
	Column,
	ColumnType,
	Model,
	PrimaryKeyProp,
} from "@lambda-group/charydbis";
import type { Uuid } from "@lambda-group/scylladb";

@Model("owner")
export class Owner {
	@Column({
		name: "owner_id",
		type: ColumnType.UUID,
		partitionKey: true,
	})
	owner_id: Uuid;

	@Column({ name: "name", type: ColumnType.TEXT })
	name: string;

	@Column({ name: "address", type: ColumnType.TEXT })
	address: string;

	[PrimaryKeyProp]?: [["owner_id"]];
}
