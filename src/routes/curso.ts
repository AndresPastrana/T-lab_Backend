import { Router } from 'express';
import { CourseController } from '../controllers';
export const router = Router();


// TODO: All are private routes
// Verify access token
// Solo podemos insertar un nuevo curso , si no hay ninguno activo
// Lo unico que se pude actualizar es el campo status con de open a close
// Solo se puede cerrar u curoso si :
//  - Todos los estudiante tienen una evalacion en la defensa o han sido dado de baja del sistema
router.get('/',[],CourseController.getAllCourses)
router.get('/:id',[],CourseController.getCourseById)
router.post('/',[],CourseController.newCourse)
router.put('/:id',[],CourseController.updateCourse)

