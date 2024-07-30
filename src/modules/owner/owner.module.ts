import { Module } from "@nestjs/common";
import { OwnerService } from "./owner.service";
import { OwnerController } from "./owner.controller";
import { OrmModule } from "src/shared/orm/orm.module";
import { Owner } from "./owner.entity";
import { Consistency } from "@lambda-group/scylladb";

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
			[Owner],
		),
	],
	controllers: [OwnerController],
	providers: [OwnerService],
})
export class OwnerModule {}
