import { IsEmail, IsOptional, IsString } from "class-validator";

export class SignUpDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;
  
  @IsString()
  @IsOptional()
  image: string;
}
