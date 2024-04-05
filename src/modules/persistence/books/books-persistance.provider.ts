import { Provider } from '@nestjs/common';
import { BooksRepository } from './books-repository';
import { BOOKS_REPO } from '../../../constants';

export const BooksRepoProvider: Provider = {
  provide: BOOKS_REPO,
  useClass: BooksRepository,
};
