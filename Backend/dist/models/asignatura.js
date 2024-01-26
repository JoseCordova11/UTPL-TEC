"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/Asignatura.ts
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Asignatura = connection_1.default.define('Asignatura', {
    codigo: {
        type: sequelize_1.DataTypes.STRING(10),
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    cargaHoraria: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    creditos: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});
exports.default = Asignatura;
