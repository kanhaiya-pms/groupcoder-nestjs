import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type QuoteDocument = HydratedDocument<Quote>;

@Schema()
export class Quote {
  @Prop({ required: true })
  quote: string;

  @Prop({ default: '' })
  auther: string;

  @Prop({ required: true })
  writter: string;

  @Prop({ default: 'panding' })
  status: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: mongoose.Schema.Types.ObjectId;

  @Prop({ default: Date.now() })
  createdAt: Date;
}

export const QuoteSchema = SchemaFactory.createForClass(Quote);
