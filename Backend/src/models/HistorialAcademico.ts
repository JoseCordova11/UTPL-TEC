// models/HistorialAcademico.ts
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const HistorialAcademico = sequelize.define('HistorialAcademico', {
    idHistorial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    estudianteID: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    asignaturaCodigo: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    calificacion: {
        type: DataTypes.INTEGER,
        allowNull: true
    }, estado: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    timestamps: false, freezeTableName: true
});

export default HistorialAcademico;
