"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controlers/usuario");
const validate_token_1 = __importDefault(require("./validate-token"));
const historial_1 = require("../controlers/historial");
const router = (0, express_1.Router)();
router.post('/', usuario_1.newUser);
router.post('/login', usuario_1.login);
router.get('/historial-academico', validate_token_1.default, historial_1.obtenerHistorialAcademico);
router.get('/equivalencias', validate_token_1.default, historial_1.obtenerAsignaturasEquivalenciaCompTI);
router.get('/homologacion', validate_token_1.default, historial_1.homologacionCompTI);
router.get('/mallaTI', validate_token_1.default, historial_1.obtenerMallaTI);
exports.default = router;
