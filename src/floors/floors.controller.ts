import { Controller, Get, Post, Body, Patch, Param, Delete, Injectable } from '@nestjs/common';
import Web3 from 'web3';
import { ethers } from 'ethers';
// import { JsonRpcProvider } from '@ethersproject/providers';

import { FloorsService } from './floors.service';
import { CreateFloorDto } from './dto/create-floor.dto';
import { UpdateFloorDto } from './dto/update-floor.dto';
// import { JsonRpcProvider } from '@ethersproject/providers';

@Injectable()
@Controller('floors')
export class FloorsController {
  constructor(private readonly floorsService: FloorsService) { }

  @Post()
  create(@Body() createFloorDto: CreateFloorDto) {
    return this.floorsService.create(createFloorDto);
  }

  @Get()
  findAll() {
    
    // // return this.floorsService.findAll();
    // const provider = new ethers.providers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/7k091tx6dYyXDSf0WO_91tvWj9mCvXZj');
    // // dirección del remitente
    // const senderAddress = '0x123...';

    // // clave privada del remitente
    // const privateKey = '0xabc...';

    // // Crear una instancia de Wallet con la clave privada del remitente
    // const wallet = new ethers.Wallet(privateKey, provider);
    // // dirección del destinatario
    // const receiverAddress = '0x456...';

    // // cantidad de ether a transferir
    // const value = ethers.utils.parseEther('1.0');

    // // Crear una instancia de transacción
    // const transaction = {
    //   to: receiverAddress,
    //   value: value
    // };

    // // Firma la transacción y envíala a la red Ethereum
    // const sendPromise = wallet.sendTransaction(transaction);

    // // Mane
    // return provider;
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.floorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFloorDto: UpdateFloorDto) {
    return this.floorsService.update(+id, updateFloorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.floorsService.remove(+id);
  }
}
