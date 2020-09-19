import { Injectable } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';


@Injectable()
export class QuotesService {
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
        return this.quotes;
    }
    getQuote(id: string): Quote {
       return this.quotes.find(quote => quote.id === id);
    }
    createQuote(quote: any) {
        return quote;
    }
}
