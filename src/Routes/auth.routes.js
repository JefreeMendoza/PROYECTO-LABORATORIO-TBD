import { Router } from "express";
import {
    createPersona,
    getPersonas,
    getPersonaById,
    /* updateAlumno,
    deleteAlumno */
} from "../Controllers/auth.controllers.js";

const router = Router();

router.post('/', createPersona);
router.get('/', getPersonas);
router.post('/:id', getPersonaById);
/* router.post('/:id', updateAlumno);
router.post('/:id', deleteAlumno); */


export default router;
