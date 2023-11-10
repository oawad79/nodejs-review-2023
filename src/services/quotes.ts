import RequestError from '../customError';
import * as db from '../services/db';
import { default as environment } from '../config/environment';

function getMultiple(page = 1) : Quote[] {
  const offset = (page - 1) * Number(environment.listPerPage);
  const data = db.query(`SELECT * FROM quote LIMIT ?,?`, 
          [offset, environment.listPerPage as number]) as Quote[];
  
  return data;
}

function validateCreate(quote : Quote) {
  let messages = [];

  if (!quote) {
    messages.push('No object is provided');
  }

  if (!quote.quote) {
    messages.push('Quote is empty');
  }

  if (!quote.author) {
    messages.push('Author is empty');
  }
  
  if (messages.length) {
    throw new RequestError({code: 400, message: messages.join(), logging: true});
  }
}

function create(quoteObj : Quote) {
  validateCreate(quoteObj);
  const {quote, author} = quoteObj;
  const result = db.run('INSERT INTO quote (quote, author) VALUES (@quote, @author)', {quote, author} as any);
  
  let message = 'Error in creating quote';
  if (result.changes) {
    message = 'Quote created successfully';
  }

  return {message};
}

export {getMultiple, create};