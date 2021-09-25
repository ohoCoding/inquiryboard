import { Router } from 'express'

import inquiryRouter from './inquiryRouter'
const router = Router()

router.use('/inquiry', inquiryRouter)

export default router
