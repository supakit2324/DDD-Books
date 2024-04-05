import { Injectable } from '@nestjs/common';
import { BooksRepo } from '../../../constants';
import { InterfaceBooksRepository } from './books.repository';
import { BooksType } from './books-type';

@Injectable()
export class Index {
  constructor(
    @BooksRepo() private readonly booksRepository: InterfaceBooksRepository,
  ) {}

  public async index(): Promise<BooksType[]> {
    return await this.booksRepository.Index();
  }
}
