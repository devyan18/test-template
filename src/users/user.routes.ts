import { Router } from 'express'
import { getUserController, createUserController } from './user.controller'

const router = Router()

router.get('/', getUserController)
router.post('/', createUserController)

export { router }
