require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const options = new DocumentBuilder()
    .setTitle('API docs')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'authorization',
    )
    .addTag('users')
    .addTag('tasks')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  // Iniciar la aplicación
  const configService = app.get(ConfigService); // Obtén el servicio de configuración
  const port = configService.get<number>('PORT'); // Obtén el puerto de la configuración
  await app.listen(port);
}

bootstrap(); // Inicia la aplicación
