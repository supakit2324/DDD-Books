import { Schema } from "@nestjs/mongoose";

@Schema({
  collection: 'users',
  timestamps: true,
  versionKey: false
})
export class Users