"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/MallaCurricularComputacion.ts
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const MallaCurricularComputacion = connection_1.default.define('MallaCurricularComputacion', {
    idMalla: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    carreraID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    asignaturaCodigo: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false
    },
    ciclo: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false, freezeTableName: true
});
exports.default = MallaCurricularComputacion;
