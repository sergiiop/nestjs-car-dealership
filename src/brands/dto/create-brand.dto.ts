import { IsString, MinLength } from 'class-validator'

export class CreateBrandDto {
  @IsString()
  @MinLength()
  name: string
}
