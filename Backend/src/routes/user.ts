import { Router } from "express";
import { login, newUser } from "../controlers/usuario";
import validateToken from "./validate-token";
import { homologacionCompTI, obtenerAsignaturasEquivalenciaCompTI, obtenerHistorialAcademico, obtenerMallaTI } from "../controlers/historial";

const router = Router()
router.post('/', newUser)
router.post('/login', login)
router.get('/historial-academico', validateToken, obtenerHistorialAcademico);
router.get('/equivalencias', validateToken, obtenerAsignaturasEquivalenciaCompTI);
router.get('/homologacion', validateToken, homologacionCompTI);
router.get('/mallaTI', validateToken, obtenerMallaTI);


export default router;