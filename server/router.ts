import { Router } from "express";
import {getGymClass, postGymClass}  from './Controller/index'

const router = Router()

router.get('/gymclass', getGymClass )
router.post('/gymclass', postGymClass)

export default router