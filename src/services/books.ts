import RequestError from '../customError';
import * as db from '../services/db';
import { default as environment } from '../config/environment';

function getMultiple(page = 1) {
  const offset = (page - 1) * Number(environment.listPerPage);
  const data = db.query(`SELECT * FROM book LIMIT ?,?`, [offset, environment.listPerPage as number]) as Book[];
  
  return data;
}

function validateCreate(book : Book) {
  let messages = [];

  if (!book) {
    messages.push('No object is provided');
  }

  if (!book.title) {
    messages.push('Book title is empty');
  }

  if (messages.length) {
    throw new RequestError({code: 400, message: messages.join(), logging: true});
  }
}

export {getMultiple};