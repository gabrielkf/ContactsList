import { IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  phone: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  whatsapp: string;
}
