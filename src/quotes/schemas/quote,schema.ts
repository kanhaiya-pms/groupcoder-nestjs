import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuoteDocument = HydratedDocument<Quote>;

@Schema()
export class Quote {
  @Prop()
  quote: string;

  @Prop()
  auther: string;

  @Prop()
  writter: string;

  @Prop({ default: 'panding' })
  status: string;

  @Prop({ default: Date.now() })
  createdAt: Date;
}

export const QuoteSchema = SchemaFactory.createForClass(Quote);
