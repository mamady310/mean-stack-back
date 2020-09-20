import { Injectable } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


 @Injectable()
export class QuotesService {
 constructor(
     @InjectModel('Quote') private readonly quoteModel: Model<Quote>,
     ) {}

   quotes: Quote[] = [
        {
            id: '1', 
            title: "monsters",
            author: "some monster",
        },
        {
            id: '2',
            title: "chicken little",
            author: "some chicken",
        },
        {
            id: '3',
            title: "pizza pizza",
            author: "get your pizza",
        }
    ]
    getQuotes(): Quote[] {
        return this.quoteModel.find().exec();
    }
    getQuote(id: string): Quote {
       return this.quotes.find(quote => quote.id === id);
    }
    createQuote(quote: any) {
        return quote;
    }
    updateQuote(id: string, updateQuoteDto): Quote{
        const data = this.quotes.find(quote => quote.id === id);
        data.title = updateQuoteDto.title ?  updateQuoteDto.title : data.title;
        data.author = updateQuoteDto.author ? updateQuoteDto.author : data.author;
        return data;
    }
    deleteQuote(id: string): Quote {
        return this.quotes.find(quote => quote.id === id);
    }
}
