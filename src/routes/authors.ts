import express from 'express';
const authorsRouter = express.Router();
import { getAuthors, createAuthor } from '../controllers/author.controller';

authorsRouter.get('/', getAuthors);
authorsRouter.post('/', createAuthor);

export default authorsRouter;
