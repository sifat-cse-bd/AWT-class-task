import { Injectable } from '@nestjs/common';
import { Faculties } from './entities/faculties.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';

@Injectable()
export class FacultiesService {
    constructor(
        @InjectRepository(Faculties)
        private facultyRepo: Repository<Faculties>,
    ) { }

    //create a product
    async create(dto: CreateFacultyDto) {
        const faculty = this.facultyRepo.create(dto);
        const savedFaculty = await this.facultyRepo.save(faculty);
        return {
            message: 'Faculty created successfully',
            data: savedFaculty,
        };
    }
}
