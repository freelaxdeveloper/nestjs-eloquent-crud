import { IsNotEmpty } from 'class-validator';

export class AddressCreateRequest {
  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  address: string;
}
