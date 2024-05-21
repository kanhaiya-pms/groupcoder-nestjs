import { ApiProperty } from '@nestjs/swagger';

export class CreateQuoteDto {
  @ApiProperty()
  quote: string;

  @ApiProperty()
  writter: string;

  @ApiProperty()
  auther: string;
}
