import RequestError from '../customError';
import * as db from '../services/db';
import { default as environment } from '../config/environment';

function getMultiple(page = 1) {
  const offset = (page - 1) * Number(environment.listPerPage);
  const data = db.query(`SELECT * FROM house LIMIT ?,?`, [offset, environment.listPerPage as number]) as House[];
  
  return data;
}

function validateCreate(house : House) {
  let messages = [];

  if (!house) {
    messages.push('No object is provided');
  }

  if (!house.id) {
    messages.push('House ID is empty');
  }

  if (messages.length) {
    throw new RequestError({code: 400, message: messages.join(), logging: true});
  }
}

export {getMultiple};