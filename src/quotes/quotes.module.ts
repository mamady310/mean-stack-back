import { Module } from '@nestjs/common';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { newQuote, QuoteSchema } from './schemas/quote.schema';

@Module({
    imports: [MongooseModule.forFeature([{
       name: newQuote.name, schema: QuoteSchema 
    }]),],
    controllers: [QuotesController],
    providers: [QuotesService],
})
export class QuotesModule {}
