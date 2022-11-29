import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'To get the contacts list, use "/contacts"';
  }
}
