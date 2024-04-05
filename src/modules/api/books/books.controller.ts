import { ApiBody, ApiTags } from '@nestjs/swagger';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BooksType } from '../../domain/books/books-type';
import { UpdateBookDto } from './dto/update-book.dto';
import { Create } from '../../domain/books/create';
import { Index } from '../../domain/books';
import { Update } from '../../domain/books/update';
import { DeleteBook } from '../../domain/books/delete';

@ApiTags('Book')
@Controller('book')
export class BooksController {
  private readonly logger = new Logger(BooksController.name);
  constructor(
    private readonly creatBook: Create,
    private readonly indexBooks: Index,
    private readonly updateBooks: Update,
    private readonly deleteBooks: DeleteBook,
  ) {}

  @Post()
  public async create(@Body() payload: CreateBookDto) {
    return await this.creatBook.create(payload);
  }

  @Get()
  public async Index(): Promise<BooksType[]> {
    return await this.indexBooks.index();
  }

  @Put(':bookId')
  @ApiBody({
    type: UpdateBookDto,
  })
  public async update(
    @Param('bookId') bookId: string,
    @Body() payload: UpdateBookDto,
  ): Promise<BooksType> {
    const book = await this.updateBooks.update(bookId, payload);
    if (!book) {
      this.logger.error(`catch on find books ${bookId} not found`);
      throw new BadRequestException({
        message: `${bookId} not found`,
      });
    }
    return book;
  }

  @Delete(':bookId')
  public async delete(@Param('bookId') bookId: string): Promise<BooksType> {
    const book = await this.deleteBooks.delete(bookId);
    if (!book) {
      this.logger.error(`catch on find books ${bookId} not found`);
      throw new BadRequestException({
        message: `${bookId} not found`,
      });
    }
    return book;
  }
}
