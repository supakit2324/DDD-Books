import { Module } from '@nestjs/common';
import { BooksRepositoryModule } from '../../persistence/books/books-repository.module';
import { Create } from './create';
import { Index } from './index';
import { Update } from './update';
import { DeleteBook } from './delete';

@Module({
  imports: [BooksRepositoryModule],
  providers: [Create, Index, Update, DeleteBook],
  exports: [Create, Index, Update, DeleteBook],
})
export class BooksModule {}
