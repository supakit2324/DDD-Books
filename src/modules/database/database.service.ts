import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService {
  private readonly databaseUrl: string;
  private readonly databaseOption: any;

  constructor(private readonly configService: ConfigService) {
    this.databaseUrl = configService.get<string>('database.host');
    this.databaseOption = configService.get<any>('database.options');
  }

  getDatabaseUrl(): string {
    return this.databaseUrl;
  }

  getDatabaseOptions(): any {
    return this.databaseOption;
  }
}
