import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const createdUser = await this.userModel.create(createUserDto);
      return createdUser;
    } catch (error) {
      if (error.code === 11000) {
        // Duplicate key error
        throw new BadRequestException('Email already exists');
      }
      throw error;
    }
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.findOne(email);
    if (password == user.password) {
      return user;
    }
    return null;
  }

  async findAll(req: any) {
    console.log("token user--",req.user);
    
    const data =  await this.userModel.find();

    return {
      data: data,
      user: req.user
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string) {
    return "only admin can be deleted account"
    return await this.userModel.findByIdAndDelete(id);
  }
}
