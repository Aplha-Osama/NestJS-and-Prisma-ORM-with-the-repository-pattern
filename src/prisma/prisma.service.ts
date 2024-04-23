import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
// import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    // console.log('DATABASE_URL', config.get('DATABASE_URL'))
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:123@localhost:5432/test?schema=public&connect_timeout=300'
        //  url: 'postgresql://postgres:123@localhost:5434/mosica?schema=public'
        },
      },
    });
  }
}
