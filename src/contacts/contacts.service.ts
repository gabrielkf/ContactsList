import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateContactDto } from './dto/create.dto';
import { UpdateContactDto } from './dto/patch.dto';
import { Contact } from './entities/contact.entity';
import { ContactsRepository } from './entities/contact.repository';

@Injectable()
export class ContactsService {
  constructor(private contactsRepository: ContactsRepository) {}

  create(createContactDto: CreateContactDto): Contact {
    const contact = this.contactsRepository.create({ ...createContactDto });
    return contact;
  }

  findAll(): Contact[] {
    return this.contactsRepository.getAll();
  }

  findOne(id: string): Contact {
    const contact = this.contactsRepository.get(id);

    if (!contact)
      throw new HttpException(
        'No contact with provided Id',
        HttpStatus.NOT_FOUND,
      );

    return contact;
  }

  update(id: string, updateContactDto: UpdateContactDto): void {
    const current = this.contactsRepository.get(id);

    if (!current)
      throw new HttpException(
        'No contact with provided Id',
        HttpStatus.NOT_FOUND,
      );

    try {
      this.contactsRepository.update({
        ...current,
        ...updateContactDto,
      });
    } catch {
      throw new HttpException(
        'Could not update contact',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  remove(id: string): void {
    const contact = this.contactsRepository.get(id);

    if (!contact)
      throw new HttpException(
        'No contact with provided Id',
        HttpStatus.NOT_FOUND,
      );

    try {
      this.contactsRepository.delete(id);
    } catch {
      throw new HttpException(
        'Could not delete contact',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
