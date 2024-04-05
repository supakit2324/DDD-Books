import { Injectable } from '@nestjs/common';
import { BooksRepo } from '../../../constants';
import { InterfaceBooksRepository } from './books.repository';
import { BooksType } from './books-type';

@Injectable()
export class Update {
  constructor(
    @BooksRepo() private readonly booksRepository: InterfaceBooksRepository,
  ) {}

  public async update(bookId: string, payload: BooksType): Promise<BooksType> {
    return await this.booksRepository.UpdateById(bookId, payload);
  }
}
