import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
@Schema({
  collection: 'books',
  timestamps: true,
  versionKey: false,
})
export class Books extends Document {
  @Prop({
    type: String,
    unique: true,
    index: true,
    default: () => uuidv4(),
  })
  bookId?: string;

  @Prop({
    type: String,
    index: true,
    required: true,
  })
  bookName: string;

  @Prop({
    type: String,
    index: true,
    required: true,
  })
  publisher: string;

  @Prop({
    type: String,
    index: true,
    required: true,
  })
  category: string;

  @Prop({
    type: Number,
    required: true,
  })
  price: number;

  @Prop({
    type: Number,
    required: true,
  })
  quantity: number;

  @Prop({
    type: Boolean,
    default: true,
  })
  isAvailable?: boolean;
}
export const BooksSchema = SchemaFactory.createForClass(Books);
