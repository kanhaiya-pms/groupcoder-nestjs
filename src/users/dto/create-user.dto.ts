import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  fname: string;

  @ApiProperty()
  lname: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
