import { Controller } from '@nestjs/common';
import { MeasurementService } from './measurement.service';

@Controller('measurement')
export class MeasurementController {
  constructor(private readonly measurementService: MeasurementService) {}
}
