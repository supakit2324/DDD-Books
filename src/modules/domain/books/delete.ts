import { Injectable } from '@nestjs/common';
import { BooksRepo } from '../../../constants';
import { InterfaceBooksRepository } from './books.repository';
import { BooksType } from './books-type';

@Injectable()
export class DeleteBook {
  constructor(
    @BooksRepo() private readonly booksRepository: InterfaceBooksRepository,
  ) {}

  public async delete(bookId: string): Promise<BooksType> {
    return await this.booksRepository.DeleteById(bookId);
  }
}
