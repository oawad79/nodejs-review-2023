import express from 'express';
const quotesRouter = express.Router();
import { getQuotes, createQuote } from '../controllers/quote.controller';

quotesRouter.get('/', getQuotes);
quotesRouter.post('/', createQuote);

export default quotesRouter;
