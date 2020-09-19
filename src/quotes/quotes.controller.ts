import { Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { QuotesService } from './quotes.service';
import { ApiTags, ApiParam }from '@nestjs/swagger';
import { Quote } from './interfaces/quote.interface';

@ApiTags('quotes')

@Controller('quotes') //this path to quotes
export class QuotesController {

constructor(private quotesService: QuotesService) {

}

    @Get()

    getQuotes(): Quote[] {
        return this.quotesService.getQuotes();
    }
    //caputres id in swagger ui
    @ApiParam({name: 'id'})

    @Get(':id') //param will contain all dynamic ids 
    
    getQuote(@Param('id') id): Quote {
      return this.quotesService.getQuote(id);  
    }

    @Post()

   createQuote(@Body() createQuoteDto: CreateQuoteDto): any {
       return this.quotesService.createQuote(createQuoteDto);
   }

    @Put('id:')
    updateQuote(@Param('id') id, @Body() updateQuoteDto: CreateQuoteDto): Quote {
    return this.quotesService.updateQuote(id, updateQuoteDto);
}

}

