import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { PhotoModule } from './modules/photo/photo.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PhotoModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
