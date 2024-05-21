import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  fname: string;

  @Prop()
  lname: string;

  @Prop()
  phone: string;

  @Prop()
  role: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ default: Date.now()})
  createAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
