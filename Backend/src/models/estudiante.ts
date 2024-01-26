// models/Estudiante.ts
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Estudiante = sequelize.define('Estudiante', {
    idEstudiante: {
        type: DataTypes.STRING(11),
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    timestamps: false
});

export default Estudiante;
