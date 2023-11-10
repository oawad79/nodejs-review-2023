import RequestError from '../customError';
import * as db from '../services/db';
import { default as environment } from '../config/environment';

function getMultiple(page = 1) {
  const offset = (page - 1) * Number(environment.listPerPage);
  const data = db.query(`SELECT * FROM author LIMIT ?,?`, [offset, environment.listPerPage as number]);
  const meta = {page};

  return {
    data,
    meta
  }
}

function validateCreate(author : Author) {
  let messages = [];

  if (!author) {
    messages.push('No object is provided');
  }

  if (!author.name) {
    messages.push('Author name is empty');
  }

  if (messages.length) {
    throw new RequestError({code: 400, message: messages.join(), logging: true});
  }
}

function create(authorObj : Author) {
  validateCreate(authorObj);
  const {name} = authorObj;
  const result = db.run('INSERT INTO author (name) VALUES (@name)', {name} as any);
  
  let message = 'Error in creating author';
  if (result.changes) {
    message = 'Author created successfully';
  }

  return {message};
}

export {getMultiple, create};