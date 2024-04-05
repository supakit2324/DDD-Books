import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {
  @IsString()
  @ApiProperty({
    example: 'bookName',
  })
  @IsNotEmpty()
  bookName: string;

  @IsString()
  @ApiProperty({
    example: 'publisher',
  })
  @IsNotEmpty()
  publisher: string;

  @IsString()
  @ApiProperty({
    example: 'category',
  })
  @IsNotEmpty()
  category: string;

  @IsNumber()
  @ApiProperty({
    example: 1,
  })
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @ApiProperty({
    example: 1,
  })
  @IsNotEmpty()
  quantity: number;

  @IsBoolean()
  @ApiProperty({
    example: true,
  })
  @IsNotEmpty()
  isAvailable?: boolean;
}
