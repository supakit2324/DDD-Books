import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Books } from './books.schema';
import { Model } from 'mongoose';
import { BooksType } from '../../domain/books/books-type';

@Injectable()
export class BooksRepository {
  private readonly logger = new Logger(BooksRepository.name);
  constructor(
    @InjectModel(Books.name) private readonly booksMode: Model<Books>,
  ) {}

  private async Index(): Promise<BooksType[]> {
    try {
      return this.booksMode.find();
    } catch (e) {
      this.logger.error(`catch on Create: ${e?.message ?? JSON.stringify(e)}`);
      throw new InternalServerErrorException({
        message: e?.message ?? e,
      });
    }
  }

  private async Create(payload: BooksType): Promise<Books> {
    try {
      return this.booksMode.create(payload);
    } catch (e) {
      this.logger.error(`catch on Create: ${e?.message ?? JSON.stringify(e)}`);
      throw new InternalServerErrorException({
        message: e?.message ?? e,
      });
    }
  }

  private async FindById(bookId: string): Promise<BooksType> {
    try {
      return this.booksMode.findOne({ bookId });
    } catch (e) {
      this.logger.error(
        `catch on FindById: ${e?.message ?? JSON.stringify(e)}`,
      );
      throw new InternalServerErrorException({
        message: e?.message ?? e,
      });
    }
  }

  private async UpdateById(
    bookId: string,
    payload: BooksType,
  ): Promise<BooksType> {
    try {
      return this.booksMode.findOneAndUpdate({ bookId }, { ...payload });
    } catch (e) {
      this.logger.error(
        `catch on UpdateById: ${e?.message ?? JSON.stringify(e)}`,
      );
      throw new InternalServerErrorException({
        message: e?.message ?? e,
      });
    }
  }

  private async DeleteById(bookId: string): Promise<BooksType> {
    try {
      return this.booksMode.findOneAndDelete({ bookId });
    } catch (e) {
      this.logger.error(
        `catch on DeleteById: ${e?.message ?? JSON.stringify(e)}`,
      );
      throw new InternalServerErrorException({
        message: e?.message ?? e,
      });
    }
  }
}
