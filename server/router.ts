import { Router } from "express";
import {getClasses, postClasses}  from './Controller/index'

const router = Router()

router.get('/class', getClasses )
router.post('/classes', postClasses)

export default router