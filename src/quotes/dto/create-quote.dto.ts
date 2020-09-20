import { ApiProperty } from "@nestjs/swagger";

export class CreateQuoteDto {

    @ApiProperty()
    readonly title: string;

    @ApiProperty()
    readonly author: string;  
}

// export class CreateQuoteDto {

//     readonly title: string;
//     readonly author: string;  
// }