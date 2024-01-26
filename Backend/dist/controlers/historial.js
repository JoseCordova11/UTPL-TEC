"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const HistorialAcademico_1 = __importDefault(require("../models/HistorialAcademico"));
// La función para obtener el historial académico basado en el token JWT
const obtenerHistorialAcademico = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Decodifica el token para obtener la información del usuario
        const decodedToken = jsonwebtoken_1.default.verify(token, '123'); // Reemplaza 'tu_secreto_jwt' con tu clave secreta
        // Extrae el estudianteID del token decodificado
        const estudianteID = decodedToken;
        // Busca el historial académico basado en el estudianteID
        const historial = yield HistorialAcademico_1.default.findAll({
            where: { estudianteID },
        });
        return historial;
    }
    catch (error) {
        // Maneja errores, por ejemplo, si el token no es válido
        console.error('Error al obtener historial académico:', error);
        throw new Error('No se pudo obtener el historial académico.');
    }
});
exports.default = obtenerHistorialAcademico;
