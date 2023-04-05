import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as compression from 'compression';
import { CORS } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  app.use(helmet());
  app.use(compression());

  app.enableCors(CORS);

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Petsdidos Ya')
    .setDescription('Petsdidos Ya')
    .setVersion('1.0')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 5000);
}
bootstrap();
