import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { QuotesService } from './quotes.service';

@Controller('quotes') //this path to quotes
export class QuotesController {

constructor(private quotesService: QuotesService) {

}

    @Get()

    getQuotes(): string {
        return this.quotesService.getQuotes();
    }
    @Post()

   createQuote(@Body() createQuoteDto: CreateQuoteDto): any {
       return this.quotesService.createQuote(createQuoteDto);
   }

}

