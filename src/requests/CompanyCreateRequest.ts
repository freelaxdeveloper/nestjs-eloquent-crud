import { IsNotEmpty, IsOptional } from 'class-validator';

export class CompanyCreateRequest {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  note: string;
}
