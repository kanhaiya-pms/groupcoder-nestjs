import { Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { Quote } from './schemas/quote,schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuotesService {
  constructor(@InjectModel(Quote.name) private quoteModel: Model<Quote>) {}

  async create(createQuoteDto: CreateQuoteDto) {
    return await this.quoteModel.create(createQuoteDto);
  }

  async findAll() {
    return await this.quoteModel.find();
  }

  async findOne(id: string) {
    return await this.quoteModel.findById(id);
  }

  async update(id: string, updateQuoteDto: UpdateQuoteDto) {
    return await this.quoteModel.findByIdAndUpdate(id, updateQuoteDto);
  }

  async remove(id: string) {
    return await this.quoteModel.findByIdAndDelete(id);
  }
}
