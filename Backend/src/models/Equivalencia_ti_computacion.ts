// models/Equivalencia.ts
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Equivalencia_ti_computacion = sequelize.define('Equivalencia_ti_computacion', {
    id: {
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
    timestamps: false, freezeTableName: true
});

export default Equivalencia_ti_computacion;
