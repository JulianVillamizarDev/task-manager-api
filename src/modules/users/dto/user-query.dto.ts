import { IsOptional, IsEmail, IsString } from 'class-validator';

//using unique values only
export class UserQuery {
  @IsOptional()
  @IsString()
  id_user?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  verification_token?: string;

  @IsString()
  @IsOptional()
  recovery_token?: string;
}
