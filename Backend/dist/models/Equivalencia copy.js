"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/Equivalencia.ts
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Equivalencia = connection_1.default.define('Equivalencia', {
    idEquivalencia: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    asignaturaOrigenCodigo: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false
    },
    asignaturaDestinoCodigo: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false
    }
}, {
    timestamps: false
});
exports.default = Equivalencia;
