// async getQuotes(): Promise<newQuote[]> {
//     return await this.quoteModel.find().exec();
// }
// async getQuote(id: string): Promise<newQuote> {
//    return await this.quoteModel.findById(id).exec();
// }
// async createQuote(quote: newQuote): Promise<newQuote> {
//     const newQuote = await new this.quoteModel(quote);
//     return newQuote.save();
// }
// async updateQuote(id: string, updateQuoteDto): Promise<newQuote>{
//     return await this.quoteModel.findByIdAndUpdate(id, updateQuoteDto, {new: true})
// }
// async deleteQuote(id: string): Promise<any> {
//     return await this.quoteModel.findByIdAndRemove(id);
// }