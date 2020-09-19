import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { QuotesService } from './quotes.service';
import { ApiTags, ApiParam }from '@nestjs/swagger';

@ApiTags('quotes')

@Controller('quotes') //this path to quotes
export class QuotesController {

constructor(private quotesService: QuotesService) {

}

    @Get()

    getQuotes(): string {
        return this.quotesService.getQuotes();
    }
    //caputres id in swagger ui
    @ApiParam({name: 'id'})

    @Get(':id') //param will contain all dynamic ids 
    
    getQuote(@Param('id') id) {
      return this.quotesService.getQuotes(id);  
    }

    @Post()

   createQuote(@Body() createQuoteDto: CreateQuoteDto): any {
       return this.quotesService.createQuote(createQuoteDto);
   }

}

