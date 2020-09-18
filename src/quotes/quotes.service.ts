import { Injectable } from '@nestjs/common';


@Injectable()
export class QuotesService {

    getQuotes(): string {
       return "this will return quotes"; 
    }
    createQuote(quote: Quote) {
        return quote;
    }
}
