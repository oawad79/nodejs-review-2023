import sqlite from 'better-sqlite3';
import path from 'path';

const db = new sqlite(path.resolve('quotes.db'), {fileMustExist: true});

export function query(sql : string, params : any[]) {
  return db.prepare(sql).all(params);
}

export function run(sql : string, params : any[]) {
  return db.prepare(sql).run(params);
}

export default {query, run} 

