import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { QuotesService } from './quotes.service';
import { ApiTags }from '@nestjs/swagger';

@ApiTags('quotes')

@Controller('quotes') //this path to quotes
export class QuotesController {

constructor(private quotesService: QuotesService) {

}

    @Get()

    getQuotes(): string {
        return this.quotesService.getQuotes();
    }
    @Get(':id') //param will contain all dynamic ids 
    
    getQuote(@Param() param) {
      return `${param.id}`;  
    }

    @Post()

   createQuote(@Body() createQuoteDto: CreateQuoteDto): any {
       return this.quotesService.createQuote(createQuoteDto);
   }

}

