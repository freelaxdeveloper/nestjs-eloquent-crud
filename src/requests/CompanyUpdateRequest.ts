import { IsOptional, IsNotEmpty } from 'class-validator';

export class CompanyUpdateRequest {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  note: string;
}
