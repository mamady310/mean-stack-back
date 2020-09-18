import { Controller, Get } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes') //this path to quotes
export class QuotesController {

constructor(private quotesService: QuotesService) {

}

@Get()

getQuotes(): string {
    return this.quotesService.getQuotes();
}

}

