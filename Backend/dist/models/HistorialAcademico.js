"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/HistorialAcademico.ts
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const HistorialAcademico = connection_1.default.define('HistorialAcademico', {
    idHistorial: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    estudianteID: {
        type: sequelize_1.DataTypes.STRING(11),
        allowNull: false
    },
    asignaturaCodigo: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false
    },
    calificacion: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    }, estado: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    }
}, {
    timestamps: false, freezeTableName: true
});
exports.default = HistorialAcademico;
