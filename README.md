## Description

NestJS based server, which uses in-memory database to store and perform CRUD operations for a list of contacts.
Each contact consists of a name and, optionally, email, phone and WhatsApp information, having the following body:
```json
{
  "name": "John Doe",
  "email": "john@doe.com",
  "phone": "9934546789",
  "whatsapp": "9987654321"
}
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test
```
