import { Router } from "express";
import { login, newUser } from "../controlers/usuario";
import validateToken from "./validate-token";
import obtenerHistorialAcademico from "../controlers/historial";

const router = Router()
router.post('/', newUser)
router.post('/login', login)
router.get('/historial-academico', validateToken, obtenerHistorialAcademico);


export default router;