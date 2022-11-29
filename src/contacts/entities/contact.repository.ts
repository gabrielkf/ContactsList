import { Contact } from './contact.entity';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

export class ContactsRepository extends InMemoryDBService<Contact> {}
