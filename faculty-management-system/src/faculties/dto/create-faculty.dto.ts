import { IsNotEmpty, IsNumber, IsOptional, IsString, Matches, Min } from 'class-validator';
import { Type } from 'class-transformer';


export class CreateFacultyDto {
    @IsString({ message: 'id must be a string' })
    @IsNotEmpty({ message: 'id should not be empty' })
    @Matches(/^\d{5}-\d{4}-\d{3}$/, {
        message: 'Id must be in the format XXXXX-XXXX-XXX (e.g., 23898-2880-203)',
    })
    id: string;

    @IsString({ message: 'name must be a string' })
    @IsNotEmpty({ message: 'name should not be empty' })
    @Matches(/\S/, { message: 'Name must contain a non-whitespace character' })
    name: string;

    @IsString({ message: 'expertise must be a string' })
    @IsNotEmpty({ message: 'expertise should not be empty' })
    expertise: string;

    @IsNumber({}, { message: 'noOfPublication must be a number' })
    @IsNotEmpty({ message: 'noOfPublication should not be empty' })
    @Min(0, { message: 'noOfPublication cannot be negative' })
    @Type(() => Number)
    noOfPublication: number;
}