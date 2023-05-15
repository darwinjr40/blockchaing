import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) { }

  @Post()
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.devicesService.create(createDeviceDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.devicesService.findAll(paginationDto);
  }

  @Get('datos')
  findAl() {
    const fechaInicial = new Date();
    const fechaActual = new Date();
    fechaInicial.setHours(0, 0, 0, 0);
    fechaActual.setHours(23, 59, 59, 999);
    return this.devicesService.findDevicesByIdBetweenDates(fechaInicial, fechaActual);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviceDto: UpdateDeviceDto) {
    return this.devicesService.update(+id, updateDeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devicesService.remove(+id);
  }


  




}
