import expressAsyncHandler from "express-async-handler";
import express from 'express';
import {quotes} from '../services';


const getQuotes = expressAsyncHandler(function(req : express.Request, res : express.Response, next) {
    try {
      res.json(quotes.getMultiple(Number(req.query.page? req.query.page : 1)));
    } catch(err) {
      console.error(`Error while getting quotes `, err.message);
      next(err);
    }
});

const createQuote = expressAsyncHandler(function(req : express.Request, res : express.Response, next) {
    try {
      res.json(quotes.create(req.body));
    } catch(err) {
      console.error(`Error while adding quotes `, err.message);
      next(err);
    }
});

export {
    getQuotes,
    createQuote
};

