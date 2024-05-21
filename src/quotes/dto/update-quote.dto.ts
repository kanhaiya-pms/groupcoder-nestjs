import { PartialType } from '@nestjs/mapped-types';
import { CreateQuoteDto } from './create-quote.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateQuoteDto extends PartialType(CreateQuoteDto) {
  @ApiProperty()
  quote: string;

  @ApiProperty()
  writter: string;

  @ApiProperty()
  auther: string;

  @ApiProperty()
  status: string;
}
