import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export class Contact implements InMemoryDBEntity {
  id: string;
  name: string;
  phone: string;
  email: string;
  whatsapp: string;
}
