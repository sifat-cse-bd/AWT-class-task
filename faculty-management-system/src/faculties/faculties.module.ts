import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultiesService } from './faculties.service';
import { FacultiesController } from './faculties.controller';
import { Faculties } from './entities/faculties.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Faculties])],
  controllers: [FacultiesController],
  providers: [FacultiesService],
})
export class FacultiesModule{}