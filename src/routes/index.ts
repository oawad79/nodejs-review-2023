import { Router } from 'express'
import quotesRouter from './quotes'
import authorsRouter from './authors'
import housesRouter from './houses'

const router = Router()

router.use('/v1/quotes', quotesRouter)
router.use('/v1/authors', authorsRouter)
router.use('/v1/houses', housesRouter)

export default router
