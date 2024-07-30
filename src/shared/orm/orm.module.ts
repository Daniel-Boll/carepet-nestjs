import { DataSource, Repository } from "@lambda-group/charydbis";
import { Module } from "@nestjs/common";

import type { DynamicModule } from "@nestjs/common";
import type { } from "@lambda-group/charydbis";
import type { ClusterConfig } from "@lambda-group/scylladb";

@Module({})
// biome-ignore lint/complexity/noStaticOnlyClass: NestJS requires the module to be a class
export class OrmModule {
  static forRoot<T>(
    config: ClusterConfig & { keyspace?: string },
    entities: Array<new () => any>,
  ): DynamicModule {
    const dataSourceProvider = {
      provide: "DATA_SOURCE",
      useFactory: async () => {
        const dataSource = new DataSource(config);
        await dataSource.initialize(config.keyspace);
        return dataSource;
      },
    };

    const repositoryProviders = entities.map((entity) => ({
      provide: entity.name,
      useFactory: (dataSource: DataSource) => {
        return new Repository(dataSource, entity);
      },
      inject: ["DATA_SOURCE"],
    }));

    return {
      module: OrmModule,
      providers: [dataSourceProvider, ...repositoryProviders],
      exports: [dataSourceProvider, ...repositoryProviders],
    };
  }
}
