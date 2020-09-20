// import { Prop, Schema } from '@nestjs/mongoose';
// import * as mongoose from 'mongoose';

// export const QuoteSchema = new mongoose.Schema({
//     title: String, 
//     author: String,
// });

import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class newQuote extends Document {
    @Prop()
    title: String;

    @Prop()
    author: String;
}

export const QuoteSchema = SchemaFactory.createForClass(newQuote);