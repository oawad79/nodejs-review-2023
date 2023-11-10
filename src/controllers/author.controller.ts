import expressAsyncHandler from "express-async-handler";
import express from 'express';
import {authors} from '../services';

const getAuthors = expressAsyncHandler(function(req : express.Request, res : express.Response, next) {
    try {
      res.json(authors.getMultiple(Number(req.query.page? req.query.page : 1)));
    } catch(err) {
      console.error(`Error while getting authors `, err.message);
      next(err);
    }
});

const createAuthor = expressAsyncHandler(function(req : express.Request, res : express.Response, next) {
    try {
      res.json(authors.create(req.body));
    } catch(err) {
      console.error(`Error while adding author `, err.message);
      next(err);
    }
});


export {
    getAuthors,
    createAuthor
};

