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
exports.login = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const estudiante_1 = __importDefault(require("../models/estudiante"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idEstudiante, nombre, apellido, email, password, } = req.body;
    try {
        const existingUser = yield estudiante_1.default.findOne({ where: { email: email } });
        if (existingUser) {
            return res.status(400).json({ message: "Usuario ya registrado" });
        }
        const hashedPass = yield bcrypt_1.default.hash(password, 10);
        yield estudiante_1.default.create({
            idEstudiante: idEstudiante,
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: hashedPass,
        });
        res.json({
            msg: "Usuario creado exitosamente"
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Ocurrió un error" });
    }
});
exports.newUser = newUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CorreoElectronico, Contraseña } = req.body;
    try {
        const user = yield estudiante_1.default.findOne({ where: { email: CorreoElectronico } });
        if (!user) {
            return res.status(400).json({ msg: "Usuario no registrado" });
        }
        const passwordValid = yield bcrypt_1.default.compare(Contraseña, user.password);
        if (!passwordValid) {
            return res.status(400).json({ msg: "Contraseña incorrecta" });
        }
        const token = jsonwebtoken_1.default.sign({ estudianteID: user.idEstudiante, CorreoElectronico: CorreoElectronico }, process.env.SECRET_KEY || '123');
        res.json(token);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al intentar iniciar sesión" });
    }
});
exports.login = login;
