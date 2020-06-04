import { NestFactory } from '@nestjs/core';
// usamos de la interfaces 
import { NestExpressApplication } from '@nestjs/platform-express'; 
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // indicando a la instancia express q va a tener una carpeta publica de forma estatica
  app.useStaticAssets(join(__dirname,'..','public'));
  // view ejs vamos a utlizar la carpeta views
  app.setBaseViewsDir(join(__dirname,'..','views'));
  app.setViewEngine('ejs');
  
  await app.listen(3000);
}
bootstrap();
