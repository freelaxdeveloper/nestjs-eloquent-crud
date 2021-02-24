import { IsNotEmpty } from 'class-validator';

export class AddressUpdateRequest {
  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  address: string;
}
