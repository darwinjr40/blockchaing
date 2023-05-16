import { Injectable } from '@nestjs/common';
import { CreateFloorDto } from './dto/create-floor.dto';
import { UpdateFloorDto } from './dto/update-floor.dto';
import Web3 from 'web3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FloorsService {

  private readonly web3INstance: Web3;

  constructor(

    private configService: ConfigService
  ) {
    this.web3INstance = new Web3(
      new Web3.providers.HttpProvider(
        'https://eth-sepolia.g.alchemy.com/v2/7k091tx6dYyXDSf0WO_91tvWj9mCvXZj'
      ),
    );
  }


  create(createFloorDto: CreateFloorDto) {
    return 'This action adds a new floor';
  }

  findAll() {
    return `This action returns all floors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} floor`;
  }

  update(id: number, updateFloorDto: UpdateFloorDto) {
    return `This action updates a #${id} floor`;
  }

  remove(id: number) {
    return `This action removes a #${id} floor`;
  }
}
