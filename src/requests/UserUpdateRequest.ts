import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserUpdateRequest {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
