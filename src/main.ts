import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SchemaValidationPipe } from './validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
//   app.useGlobalPipes(new SchemaValidationPipe())
  await app.listen(3001);
}
bootstrap();
