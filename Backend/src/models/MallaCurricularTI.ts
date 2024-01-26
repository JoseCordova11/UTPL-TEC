// models/MallaCurricularTI.ts
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const MallaCurricularTI = sequelize.define('MallaCurricularTI', {
    idMalla: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    carreraID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    asignaturaCodigo: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    ciclo: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false, freezeTableName:true
});

export default MallaCurricularTI;
