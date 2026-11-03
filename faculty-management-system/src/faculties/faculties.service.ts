import { ConflictException, Injectable } from '@nestjs/common';
import { Faculties } from './entities/faculties.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto';

@Injectable()
export class FacultiesService {
    constructor(
        @InjectRepository(Faculties)
        private facultyRepo: Repository<Faculties>,
    ) { }

    async create(dto: CreateFacultyDto) {
        try {
            const existingFaculty = await this.facultyRepo.findOne({
                where: { id: dto.id },
            });

            if (existingFaculty) {
                throw new ConflictException('A faculty with this ID already exists');
            }

            const faculty = this.facultyRepo.create(dto);
            await this.facultyRepo.save(faculty);

            return {
                message: 'Faculty created successfully',
                data: faculty,
            };

        } catch (error) {
            if (error instanceof ConflictException) {
                throw error;
            }

            throw error;
        }
    }
}
