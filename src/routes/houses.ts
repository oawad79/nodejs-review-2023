import express from 'express';
import { getHouses } from '../controllers/house.controller';

const quotesRouter = express.Router();

quotesRouter.get('/', getHouses);
//quotesRouter.post('/', createQuote);

export default quotesRouter;
