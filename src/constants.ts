import { Inject } from '@nestjs/common';

export const DB_CONNECTION_NAME = 'DDD';
export const BOOKS_REPO = 'BooksRepo';
export const BooksRepo = () => Inject(BOOKS_REPO);
