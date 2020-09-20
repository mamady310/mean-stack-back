import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { QuotesService } from './quotes.service';
import { ApiTags, ApiParam }from '@nestjs/swagger';
// import { Quote } from './interfaces/quote.interface';
import { newQuote } from './schemas/quote.schema';

@ApiTags('quotes')

@Controller('quotes') //this path to quotes
export class QuotesController {

constructor(private quotesService: QuotesService) {}

    @Get()

    getQuotes(): Promise<newQuote[]> {
        return this.quotesService.getQuotes();
    }
    //caputres id in swagger ui
    @ApiParam({name: 'id'})

    @Get(':id') //param will contain all dynamic ids 
    getQuote(@Param('id') id): Promise<newQuote> {
      return this.quotesService.getQuote(id);  
    }

    @Post()
    createQuote(@Body() createQuoteDto: CreateQuoteDto): Promise<newQuote> {
       return this.quotesService.createQuote(createQuoteDto);
   }
    @ApiParam({name: 'id'})
    @Put(':id')
    @Put(':id')
    updateQuote(@Param('id') id, @Body() updateQuoteDto: CreateQuoteDto): Promise<newQuote> {
      return this.quotesService.updateQuote(id, updateQuoteDto);
}   
    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteQuote(@Param('id') id): Promise<any> {
      return this.quotesService.deleteQuote(id);
    }

}

