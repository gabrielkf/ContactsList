import { ContactsRepository } from './entities/contact.repository';
import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';

@Module({
  controllers: [ContactsController],
  providers: [ContactsRepository, ContactsService],
})
export class ContactsModule {}
