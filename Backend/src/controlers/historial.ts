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

export const obtenerHistorialAcademico = async (req: Request, res: Response) => {
    try {
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
            SELECT A.codigo AS CodigoAsignatura,
            A.nombre AS NombreAsignatura,
            A.creditos AS NumeroCreditos,
            H.calificacion AS Calificacion,
            H.estado AS Estado,
            MC.ciclo AS Ciclo
     FROM Asignaturas A
     JOIN HistorialAcademico H ON A.codigo = H.asignaturaCodigo
     JOIN MallaCurricularComputacion MC ON A.codigo = MC.asignaturaCodigo
     WHERE H.estudianteID = ? AND H.estado = 'Aprobada';
     
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
    } catch (error) {
        console.error('Error al obtener historial académico:', error);
        throw new Error('No se pudo obtener el historial académico.');
    }
};

export const obtenerAsignaturasEquivalenciaCompTI = async (req: Request, res: Response) => {
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
            E.asignaturaOrigenCodigo AS codigo_origen,
            A1.nombre AS nombre_origen,
            E.asignaturaDestinoCodigo AS codigo_destino,
            A2.nombre AS nombre_destino
        FROM 
            equivalencia_computacion_ti E
        JOIN 
            Asignaturas A1 ON E.asignaturaOrigenCodigo = A1.codigo
        JOIN 
            Asignaturas A2 ON E.asignaturaDestinoCodigo = A2.codigo
        WHERE 
            E.asignaturaOrigenCodigo IN (
                SELECT asignaturaCodigo 
                FROM HistorialAcademico 
                WHERE estado = 'Aprobada' AND estudianteID = ?
            );
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

export const obtenerAsignaturasEquivalenciaTIComp = async (req: Request, res: Response) => {
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
            E.asignaturaOrigenCodigo AS codigo_origen,
            A1.nombre AS nombre_origen,
            E.asignaturaDestinoCodigo AS codigo_destino,
            A2.nombre AS nombre_destino
        FROM 
            equivalencia_computacion_ti E
        JOIN 
            Asignaturas A1 ON E.asignaturaOrigenCodigo = A1.codigo
        JOIN 
            Asignaturas A2 ON E.asignaturaDestinoCodigo = A2.codigo
        WHERE 
            E.asignaturaOrigenCodigo IN (
                SELECT asignaturaCodigo 
                FROM HistorialAcademico 
                WHERE estado = 'Aprobada' AND estudianteID = ?
            );
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

export const homologacionCompTI = async (req: Request, res: Response) => {
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
        E.asignaturaOrigenCodigo AS codigo_origen,
        A1.nombre AS nombre_origen,
        A1.creditos AS creditos_origen,
        A1.cargaHoraria AS carga_horaria_origen,
        COALESCE(MC1.ciclo, 0) AS ciclo_origen,
        E.asignaturaDestinoCodigo AS codigo_destino,
        A2.nombre AS nombre_destino,
        A2.creditos AS creditos_destino,
        A2.cargaHoraria AS carga_horaria_destino,
        COALESCE(MC2.ciclo, 0) AS ciclo_destino,
        EC.idCarrera,
        C.nombre AS nombre_carrera,
        ES.nombre AS nombre_estudiante,
        ES.apellido AS apellido_estudiante,
        ES.email AS email_estudiante
    FROM 
        equivalencia_computacion_ti E
    JOIN 
        Asignaturas A1 ON E.asignaturaOrigenCodigo = A1.codigo
    JOIN 
        Asignaturas A2 ON E.asignaturaDestinoCodigo = A2.codigo
    JOIN 
        HistorialAcademico HA ON E.asignaturaOrigenCodigo = HA.asignaturaCodigo
    JOIN 
        Estudiantes ES ON HA.estudianteID = ES.idEstudiante
    JOIN 
        EstudianteCarrera EC ON ES.idEstudiante = EC.idEstudiante
    JOIN 
        Carreras C ON EC.idCarrera = C.id
    LEFT JOIN 
        MallaCurricularComputacion MC1 ON A1.codigo = MC1.asignaturaCodigo AND EC.idCarrera = MC1.carreraID
    LEFT JOIN (
        SELECT asignaturaCodigo, ciclo
        FROM MallaCurricularTI
    ) MC2 ON A2.codigo = MC2.asignaturaCodigo
    WHERE 
        HA.estado = 'Aprobada' AND ES.idEstudiante = ?; 
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


export const obtenerMallaTI = async (req: Request, res: Response) => {
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
        A.codigo AS codigo_asignatura,
            A.nombre AS nombre_asignatura,
                A.creditos,
                A.cargaHoraria,
                MTI.ciclo
        FROM 
            Asignaturas A
        JOIN 
            MallaCurricularTI MTI ON A.codigo = MTI.asignaturaCodigo;
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
