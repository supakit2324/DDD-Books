import { Injectable } from '@nestjs/common';
import { BooksRepo } from '../../../constants';
import { InterfaceBooksRepository } from './books.repository';
import { BooksType } from './books-type';

@Injectable()
export class Create {
  constructor(
    @BooksRepo() private readonly booksRepository: InterfaceBooksRepository,
  ) {}

  public async create(payload: BooksType): Promise<BooksType> {
    return await this.booksRepository.Create(payload);
  }
}
