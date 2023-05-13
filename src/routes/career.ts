import { Router } from 'express'
import { body, param } from 'express-validator'
import {
  getAllCareers,
  insertCareer,
  updateCareer,
  deleteCareer
} from '../controllers/carrer'
import { checkForErrors } from '../middlewares/checkForErrors'

export const router = Router()

router.get('/', getAllCareers)
router.post(
  '/',
  [
    body('name', 'name is required').notEmpty(),
    body('name', 'name should be a string').isString(),
    checkForErrors
  ],
  insertCareer
)
router.put(
  '/:id',
  [param('id', 'Not a valid MongoId').isMongoId(), checkForErrors],
  updateCareer
)
router.delete(
  '/:id',
  [param('id', 'Invalid Mongo id').isMongoId(), checkForErrors],
  deleteCareer
)
