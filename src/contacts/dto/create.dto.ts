import {
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsEmail,
  IsPhoneNumber,
} from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNumber()
  phone: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsPhoneNumber()
  whatsapp: string;
}
