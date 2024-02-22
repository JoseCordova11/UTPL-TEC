import { Router } from "express";
import { login, newUser } from "../controlers/usuario";
import validateToken from "./validate-token";
import { homologacionCompTDE, homologacionCompTI, homologacionTDEComp, homologacionTDETI, homologacionTIComp, homologacionTITDE, obtenerHistorialAcademicoComp, obtenerHistorialAcademicoTDE, obtenerHistorialAcademicoTI, obtenerMallaComp, obtenerMallaTDE, obtenerMallaTI } from "../controlers/historial";
import { comp_tde, comp_ti, tde_comp, tde_ti, ti_comp, ti_tde } from "../controlers/equivalencias";

const router = Router()
router.post('/', newUser)
router.post('/login', login)

router.get('/historial-academico_comp', validateToken, obtenerHistorialAcademicoComp);
router.get('/historial-academico_ti', validateToken, obtenerHistorialAcademicoTI);
router.get('/historial-academico_tde', validateToken, obtenerHistorialAcademicoTDE);

router.get('/homologacion_comp_ti', validateToken, homologacionCompTI);
router.get('/homologacion_comp_tde', validateToken, homologacionCompTDE);
router.get('/homologacion_ti_comp', validateToken, homologacionTIComp);
router.get('/homologacion_ti_tde', validateToken, homologacionTITDE);
router.get('/homologacion_tde_comp', validateToken, homologacionTDEComp);
router.get('/homologacion_tde_ti', validateToken, homologacionTDETI);

router.get('/mallaTI', validateToken, obtenerMallaTI);
router.get('/mallaComp', validateToken, obtenerMallaComp);
router.get('/mallaTDE', validateToken, obtenerMallaTDE);

router.get('/comp_ti', comp_ti);
router.get('/comp_tde', comp_tde);
router.get('/ti_tde', ti_tde);
router.get('/ti_comp', ti_comp);
router.get('/tde_comp', tde_comp);
router.get('/tde_ti', tde_ti);

export default router;