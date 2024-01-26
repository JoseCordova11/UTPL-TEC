// models/Equivalencia.ts
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Equivalencia = sequelize.define('Equivalencia', {
    idEquivalencia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    asignaturaOrigenCodigo: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    asignaturaDestinoCodigo: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
}, {
    timestamps: false
});

export default Equivalencia;
