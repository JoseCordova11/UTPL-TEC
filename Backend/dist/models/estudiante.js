"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/Estudiante.ts
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Estudiante = connection_1.default.define('Estudiante', {
    idEstudiante: {
        type: sequelize_1.DataTypes.STRING(11),
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING(55),
        unique: true,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false
});
exports.default = Estudiante;
