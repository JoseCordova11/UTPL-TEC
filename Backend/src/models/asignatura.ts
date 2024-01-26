// models/Asignatura.ts
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Asignatura = sequelize.define('Asignatura', {
    codigo: {
        type: DataTypes.STRING(10),
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    cargaHoraria: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    creditos: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

export default Asignatura;
