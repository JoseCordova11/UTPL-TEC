// models/Carrera.ts
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Carrera = sequelize.define('Carrera', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    modalidad: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    duracionCiclos: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

export default Carrera;
