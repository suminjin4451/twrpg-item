import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    ItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
