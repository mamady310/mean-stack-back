import { Injectable } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';


@Injectable()
export class QuotesService {

    getQuotes(): string {
       return "this will return quotes"; 
    }
    createQuote(quote: any) {
        return quote;
    }
}
