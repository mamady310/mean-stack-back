import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Quotes API')
    .setDescription('Quotes')
    .setVersion("a.1")
    .addTag('quotes')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  // path to view swagger UI is 
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
