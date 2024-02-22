import HistorialAcademico from '../models/HistorialAcademico';
import { Request, Response } from 'express';
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sistema-homologador',
});
const jwt = require('jsonwebtoken');


export const comp_ti = async (req: Request, res: Response) => {
    let cedula = '';
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
            cedula = decodedToken.estudianteID;
        } catch (error) {
            console.log();
            console.error('Error al decodificar el token:', error);
        }
    }
    try {
        connection.connect();
        const sql = `
        SELECT
        MC_Computacion.asignaturaCodigo AS Asignatura_Origen,
        A_Computacion.nombre AS Nombre_Asignatura_Origen,
        A_Computacion.creditos as Creditos_Asignatura_Origen,
        MC_Computacion.ciclo AS Ciclo_Origen,
        equivalencia_computacion_ti.asignaturaDestinoCodigo AS Asignatura_Destino,
        A_TI.nombre AS Nombre_Asignatura_Destino,
        A_TI.creditos as Creditos_Asignatura_Destino,
        MC_TI.ciclo AS Ciclo_Destino
    FROM
        MallaCurricularComputacion MC_Computacion
    LEFT JOIN
        equivalencia_computacion_ti ON MC_Computacion.asignaturaCodigo = equivalencia_computacion_ti.asignaturaOrigenCodigo
    LEFT JOIN
        MallaCurricularTI MC_TI ON equivalencia_computacion_ti.asignaturaDestinoCodigo = MC_TI.asignaturaCodigo
    LEFT JOIN
        Asignaturas A_Computacion ON MC_Computacion.asignaturaCodigo = A_Computacion.codigo
    LEFT JOIN
        Asignaturas A_TI ON equivalencia_computacion_ti.asignaturaDestinoCodigo = A_TI.codigo;
    `;

        connection.query(sql, [cedula], (error: any, results: any, fields: any) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                throw new Error('No se pudo obtener las asignaturas de equivalencia.');
            }

            res.json(results);
        });

    } catch (error) {
        console.error('Error al obtener las asignaturas de equivalencia:', error);
        throw new Error('No se pudo obtener las asignaturas de equivalencia.');
    }
};
export const comp_tde = async (req: Request, res: Response) => {
    let cedula = '';
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
            cedula = decodedToken.estudianteID;
        } catch (error) {
            console.log();
            console.error('Error al decodificar el token:', error);
        }
    }
    try {
        connection.connect();
        const sql = `
        SELECT
    MC_Computacion.asignaturaCodigo AS Asignatura_Origen,
    A_Computacion.nombre AS Nombre_Asignatura_Origen,
    MC_Computacion.ciclo AS Ciclo_Origen,
    Equivalencia_Computacion_TDE.asignaturaDestinoCodigo AS Asignatura_Destino,
    A_TDE.nombre AS Nombre_Asignatura_Destino,
    A_TDE.creditos as Creditos_Asignatura_Destino,
    MC_TDE.ciclo AS Ciclo_Destino
FROM
    MallaCurricularComputacion MC_Computacion
LEFT JOIN
    Equivalencia_Computacion_TDE ON MC_Computacion.asignaturaCodigo = Equivalencia_Computacion_TDE.asignaturaOrigenCodigo
LEFT JOIN
    MallaCurricularTDE MC_TDE ON Equivalencia_Computacion_TDE.asignaturaDestinoCodigo = MC_TDE.asignaturaCodigo
LEFT JOIN
    Asignaturas A_Computacion ON MC_Computacion.asignaturaCodigo = A_Computacion.codigo
LEFT JOIN
    Asignaturas A_TDE ON Equivalencia_Computacion_TDE.asignaturaDestinoCodigo = A_TDE.codigo;

    `;

        connection.query(sql, [cedula], (error: any, results: any, fields: any) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                throw new Error('No se pudo obtener las asignaturas de equivalencia.');
            }

            res.json(results);
        });

    } catch (error) {
        console.error('Error al obtener las asignaturas de equivalencia:', error);
        throw new Error('No se pudo obtener las asignaturas de equivalencia.');
    }
};
export const ti_comp = async (req: Request, res: Response) => {
    let cedula = '';
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
            cedula = decodedToken.estudianteID;
        } catch (error) {
            console.log();
            console.error('Error al decodificar el token:', error);
        }
    }
    try {
        connection.connect();
        const sql = `
        SELECT
        MC_TI.asignaturaCodigo AS Asignatura_Origen,
        A_TI.nombre AS Nombre_Asignatura_Origen,
        MC_TI.ciclo AS Ciclo_Origen,
        equivalencia_ti_computacion.asignaturaDestinoCodigo AS Asignatura_Destino,
        A_Computacion.nombre AS Nombre_Asignatura_Destino,
        A_Computacion.creditos as Creditos_Asignatura_Destino,
        MC_Computacion.ciclo AS Ciclo_Destino
    FROM
        MallaCurricularTI MC_TI
    LEFT JOIN
        equivalencia_ti_computacion ON MC_TI.asignaturaCodigo = equivalencia_ti_computacion.asignaturaOrigenCodigo
    LEFT JOIN
        MallaCurricularComputacion MC_Computacion ON equivalencia_ti_computacion.asignaturaDestinoCodigo = MC_Computacion.asignaturaCodigo
    LEFT JOIN
        Asignaturas A_TI ON MC_TI.asignaturaCodigo = A_TI.codigo
    LEFT JOIN
        Asignaturas A_Computacion ON equivalencia_ti_computacion.asignaturaDestinoCodigo = A_Computacion.codigo;    
    `;

        connection.query(sql, [cedula], (error: any, results: any, fields: any) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                throw new Error('No se pudo obtener las asignaturas de equivalencia.');
            }

            res.json(results);
        });

    } catch (error) {
        console.error('Error al obtener las asignaturas de equivalencia:', error);
        throw new Error('No se pudo obtener las asignaturas de equivalencia.');
    }
};
export const ti_tde = async (req: Request, res: Response) => {
    let cedula = '';
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
            cedula = decodedToken.estudianteID;
        } catch (error) {
            console.log();
            console.error('Error al decodificar el token:', error);
        }
    }
    try {
        connection.connect();
        const sql = `
        SELECT
        MC_Computacion.asignaturaCodigo AS Asignatura_Origen,
        A_Computacion.nombre AS Nombre_Asignatura_Origen,
        MC_Computacion.ciclo AS Ciclo_Origen,
        equivalencia_ti_tde.asignaturaDestinoCodigo AS Asignatura_Destino,
        A_TDE.nombre AS Nombre_Asignatura_Destino,
        A_TDE.creditos as Creditos_Asignatura_Destino,
        MC_TDE.ciclo AS Ciclo_Destino
    FROM
        mallacurricularti MC_Computacion
    LEFT JOIN
        equivalencia_ti_tde ON MC_Computacion.asignaturaCodigo = equivalencia_ti_tde.asignaturaOrigenCodigo
    LEFT JOIN
        MallaCurricularTDE MC_TDE ON equivalencia_ti_tde.asignaturaDestinoCodigo = MC_TDE.asignaturaCodigo
    LEFT JOIN
        Asignaturas A_Computacion ON MC_Computacion.asignaturaCodigo = A_Computacion.codigo
    LEFT JOIN
        Asignaturas A_TDE ON equivalencia_ti_tde.asignaturaDestinoCodigo = A_TDE.codigo;
    
    `;

        connection.query(sql, [cedula], (error: any, results: any, fields: any) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                throw new Error('No se pudo obtener las asignaturas de equivalencia.');
            }

            res.json(results);
        });

    } catch (error) {
        console.error('Error al obtener las asignaturas de equivalencia:', error);
        throw new Error('No se pudo obtener las asignaturas de equivalencia.');
    }
};
export const tde_comp = async (req: Request, res: Response) => {
    let cedula = '';
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
            cedula = decodedToken.estudianteID;
        } catch (error) {
            console.log();
            console.error('Error al decodificar el token:', error);
        }
    }
    try {
        connection.connect();
        const sql = `
        SELECT
        MC_TDE.asignaturaCodigo AS Asignatura_Origen,
        A_TDE.nombre AS Nombre_Asignatura_Origen,
        MC_TDE.ciclo AS Ciclo_Origen,
        equivalencia_tde_comp.asignaturaDestinoCodigo AS Asignatura_Destino,
        A_TI.nombre AS Nombre_Asignatura_Destino,
        MC_TI.ciclo AS Ciclo_Destino,
        A_TI.creditos AS Creditos_Asignatura_Destino
    FROM
        MallaCurricularTDE MC_TDE
    LEFT JOIN
        equivalencia_tde_comp ON MC_TDE.asignaturaCodigo = equivalencia_tde_comp.asignaturaOrigenCodigo
    LEFT JOIN
        MallaCurricularTI MC_TI ON equivalencia_tde_comp.asignaturaDestinoCodigo = MC_TI.asignaturaCodigo
    LEFT JOIN
        Asignaturas A_TDE ON MC_TDE.asignaturaCodigo = A_TDE.codigo
    LEFT JOIN
        Asignaturas A_TI ON equivalencia_tde_comp.asignaturaDestinoCodigo = A_TI.codigo;
    `;

        connection.query(sql, [cedula], (error: any, results: any, fields: any) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                throw new Error('No se pudo obtener las asignaturas de equivalencia.');
            }

            res.json(results);
        });

    } catch (error) {
        console.error('Error al obtener las asignaturas de equivalencia:', error);
        throw new Error('No se pudo obtener las asignaturas de equivalencia.');
    }
};
export const tde_ti = async (req: Request, res: Response) => {
    let cedula = '';
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
            cedula = decodedToken.estudianteID;
        } catch (error) {
            console.log();
            console.error('Error al decodificar el token:', error);
        }
    }
    try {
        connection.connect();
        const sql = `
        SELECT
        MC_TDE.asignaturaCodigo AS Asignatura_Origen,
        A_TDE.nombre AS Nombre_Asignatura_Origen,
        MC_TDE.ciclo AS Ciclo_Origen,
        Equivalencia_TDE_TI.asignaturaDestinoCodigo AS Asignatura_Destino,
        A_TI.nombre AS Nombre_Asignatura_Destino,
        MC_TI.ciclo AS Ciclo_Destino,
        A_TI.creditos AS Creditos_Asignatura_Destino
    FROM
        MallaCurricularTDE MC_TDE
    LEFT JOIN
        Equivalencia_TDE_TI ON MC_TDE.asignaturaCodigo = Equivalencia_TDE_TI.asignaturaOrigenCodigo
    LEFT JOIN
        MallaCurricularTI MC_TI ON Equivalencia_TDE_TI.asignaturaDestinoCodigo = MC_TI.asignaturaCodigo
    LEFT JOIN
        Asignaturas A_TDE ON MC_TDE.asignaturaCodigo = A_TDE.codigo
    LEFT JOIN
        Asignaturas A_TI ON Equivalencia_TDE_TI.asignaturaDestinoCodigo = A_TI.codigo;
    `;

        connection.query(sql, [cedula], (error: any, results: any, fields: any) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                throw new Error('No se pudo obtener las asignaturas de equivalencia.');
            }

            res.json(results);
        });

    } catch (error) {
        console.error('Error al obtener las asignaturas de equivalencia:', error);
        throw new Error('No se pudo obtener las asignaturas de equivalencia.');
    }
};