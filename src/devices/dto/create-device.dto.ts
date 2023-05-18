import { IsArray, IsIn, IsInt, IsNumber, IsOptional,IsBoolean,
    IsPositive, IsString, MinLength 
} from 'class-validator';

export class CreateDeviceDto {

    @IsString()
    @IsOptional()
    temp?: string;

    @IsString()
    @IsOptional()
    hum?: string;

    @IsString()
    @IsOptional()
    humo?: string;

    @IsString()
    @IsOptional()
    fecha?: string;

    @IsBoolean()
    @IsOptional()
    state?: boolean;

}
