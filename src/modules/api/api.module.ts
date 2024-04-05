import { Module } from '@nestjs/common';
import { BooksController } from './books/books.controller';
import { DomainModule } from '../domain/domain.module';

@Module({
  controllers: [BooksController],
  imports: [DomainModule],
})
export class ApiModule {}
