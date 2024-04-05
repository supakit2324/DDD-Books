import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { model } from '../books/models/model';
import { BooksRepoProvider } from './books-persistance.provider';
@Module({
  imports: [MongooseModule.forFeature(model)],
  providers: [BooksRepoProvider],
  exports: [BooksRepoProvider],
})
export class BooksRepositoryModule {}
