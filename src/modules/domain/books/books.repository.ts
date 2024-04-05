import { BooksType } from './books-type';

export interface InterfaceBooksRepository {
  Index(): Promise<BooksType[]>;
  Create(createFields: BooksType): Promise<BooksType>;
  FindById(userId: string): Promise<BooksType>;
  UpdateById(
    bookId: string,
    updateFields: Partial<BooksType>,
  ): Promise<BooksType>;
  DeleteById(userId: string): Promise<BooksType>;
}
