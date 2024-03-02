import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for requests from the React frontend
  app.enableCors({
    origin: 'http://localhost:3001',
  });

  await app.listen(3000); // Your NestJS server will listen on port 3000
}

bootstrap();
