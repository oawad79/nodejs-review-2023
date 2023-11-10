import expressAsyncHandler from "express-async-handler";
import express from 'express';
import {houses} from '../services';

const getHouses = expressAsyncHandler(function(req : express.Request, res : express.Response, next) {
    try {
      res.json(houses.getMultiple(Number(req.query.page? req.query.page : 1)));
    } catch(err) {
      console.error(`Error while getting houses `, err.message);
      next(err);
    }
});

// const createHouse = expressAsyncHandler(function(req : express.Request, res : express.Response, next) {
//     try {
//       res.json(houses.create(req.body));
//     } catch(err) {
//       console.error(`Error while adding author `, err.message);
//       next(err);
//     }
// });


export {
    getHouses
};

