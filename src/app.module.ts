import { Module } from "@nestjs/common";
import { OwnerModule } from './modules/owner/owner.module';
import { PetModule } from './modules/pet/pet.module';
import { SensorModule } from './modules/sensor/sensor.module';
import { MeasurementModule } from './modules/measurement/measurement.module';

@Module({
	imports: [OwnerModule, PetModule, SensorModule, MeasurementModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
