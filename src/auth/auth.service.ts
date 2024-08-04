import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.validateUser(email, password);
    if (user) {
      // const { password, ...result } = user;
      return user;
    }
    return null;
  }

  async signIn(email: string, password: string) {
    const user = await this.usersService.findOne(email);
    console.log('signIn user =>', user);
    if (!user) {
      throw new BadRequestException({
        massege: 'User not ragistered',
        error: 'Unauthorized',
      });
    }

    if (user.password !== password) {
      throw new BadRequestException({
        massege: 'Wrong email or password',
        error: 'Unauthorized',
      });
    }
    const payload = {user};
    console.log("user =>",user);
    
    return {
      ok: true,
      access_token: await this.jwtService.signAsync(payload),
      massege: 'Login successfull',
    };
  }
}
