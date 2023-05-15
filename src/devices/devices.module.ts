import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';

import { Device } from './entities/device.entity';
import { Monitor } from './entities/monitor.entity';

@Module({
  controllers: [DevicesController],
  providers: [DevicesService],
  imports: [
    TypeOrmModule.forFeature([ Device, Monitor ])
  ],
  exports: [
    DevicesService,
    TypeOrmModule,
  ]
})
export class DevicesModule {}
