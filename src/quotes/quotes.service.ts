import { Injectable } from '@nestjs/common';


@Injectable()
export class QuotesService {

    getQuotes(): string {
       return "this will return quotes"; 
    }
    createQuote(quote: any) {
        return `${quote.author} has written ${quote.title}`
    }
}
