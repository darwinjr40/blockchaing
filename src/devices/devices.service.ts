import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';


import { Device } from './entities/device.entity';
import { validate as isUUID } from 'uuid';
import { Monitor } from './entities/monitor.entity';

@Injectable()
export class DevicesService {

  private readonly logger = new Logger('DevicesService');

  constructor(
    @InjectRepository(Device)
    private readonly deviceRepository: Repository<Device>,
  ) {}

  async create(createDeviceDto: CreateDeviceDto) {
    try {
      const device = this.deviceRepository.create(createDeviceDto);
      await this.deviceRepository.save( device );
      return device;      
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    return this.deviceRepository.find({
      take: limit,
      skip: offset,
      // TODO: relaciones
    })
  }

  async findOne(id: number) {
    let device = await this.deviceRepository.findOneBy({ id });
    if (!device){
     throw new NotFoundException(`Device with ${ id } not found`);
    }  
    return device;
  }

  update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return `This action updates a #${id} device`;
  }

  async remove(id: number) {
    let device = await this.findOne(id)
    await this.deviceRepository.remove( device );
    // return `This action removes a #${id} device`;
  }

  private handleDBExceptions( error: any ) {

    if ( error.code === '23505' )
      throw new BadRequestException(error.detail);
    
    this.logger.error(error)
    // console.log(error)
    throw new InternalServerErrorException('Unexpected error, check server logs');

  }


  public async findMonitorsByDispositivoIdBetweenDates(
    deviceId: string,
    startDate: string,
    endDate: string,
  ) {
    const queryBuilder = this.deviceRepository.createQueryBuilder()
      .select('monitor.temp', 'temp')
      .addSelect('monitor.time', 'time')
      .addSelect('device.estado', 'estado')
      .innerJoin(Monitor, 'monitor', 'device.id = monitor.deviceId')
      .where('device.id = :deviceId', { deviceId })
      .andWhere('monitor.time BETWEEN :startDate AND :endDate', { startDate, endDate })
      .orderBy('monitor.time', 'DESC');
    return queryBuilder.getMany();
  }

  public async findAllDevicesByIdBetweenDates(    
    startDate: Date,
    endDate: Date,
  ) {
    const queryBuilder = this.deviceRepository.createQueryBuilder()
    let resp = queryBuilder.where('time BETWEEN :startDate AND :endDate', { startDate, endDate });
    return resp.getMany();
  }

  public async findDevicesBetweenDates(    
    startDate: Date,
    endDate: Date,
  ) {
    const queryBuilder = this.deviceRepository.createQueryBuilder()
    let estado = false;
    let resp = await queryBuilder
      .where('state =:estado AND time BETWEEN :startDate AND :endDate', { 
        startDate,
        endDate, 
        estado,
      }).getOne();
    let resultado = {"Data": ""};
    if (resp) {      
      resultado = {"Data": `${resp.id}, ${resp.temp}, ${resp.hum}, ${resp.humo}, ${resp.time.toISOString()}`}
      let device = await this.deviceRepository.findOneBy({ id:resp.id});
      if (device){
      // throw new NotFoundException(`Device with ${ id } not found`);
        device.state = true;
        await  this.deviceRepository.save(device);
      }  
    }
    return resultado;
  }


}
