import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserCreateRequest {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
