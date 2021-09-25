import { Router } from 'express'
import { isAuthed, isAuthedWhenNotOpen } from '../../middleware'
import { InquiryController } from '../../controllers'
const router = Router()

router.get('/', InquiryController.FindAll)
router.get('/:id', isAuthedWhenNotOpen, InquiryController.FindOne)
router.get('/pw/:id', isAuthed, InquiryController.FindOnePW)
router.put('/:id', isAuthed, InquiryController.Update)
router.post('/', InquiryController.Create)
router.delete('/:id', isAuthed, InquiryController.Delete)

export default router
