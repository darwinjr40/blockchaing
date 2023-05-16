import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { FloorsService } from './floors.service';
import { FloorsController } from './floors.controller';
import { Floor } from './entities/floor.entity';

@Module({
  controllers: [FloorsController],
  providers: [FloorsService],
  imports: [
    TypeOrmModule.forFeature([ Floor])
  ],
})
export class FloorsModule {}
