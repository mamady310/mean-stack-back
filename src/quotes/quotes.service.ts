import { Injectable } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';





 @Injectable()
export class QuotesService {
 constructor(
     @InjectModel('Quote') private readonly quoteModel: Model<Quote>
     ) {}

   
    
}
