"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerMallaTDE = exports.obtenerMallaTI = exports.obtenerMallaComp = exports.homologacionTDETI = exports.homologacionTDEComp = exports.homologacionTITDE = exports.homologacionTIComp = exports.homologacionCompTDE = exports.homologacionCompTI = exports.obtenerHistorialAcademicoTDE = exports.obtenerHistorialAcademicoTI = exports.obtenerHistorialAcademicoComp = void 0;
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sistema-homologador',
});
const jwt = require('jsonwebtoken');
const obtenerHistorialAcademicoComp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let cedula = '';
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            try {
                const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
                cedula = decodedToken.estudianteID;
            }
            catch (error) {
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
            connection.query(sql, [cedula], (error, results, fields) => {
                if (error) {
                    console.error('Error al ejecutar la consulta:', error);
                    throw new Error('No se pudo obtener las asignaturas de equivalencia.');
                }
                res.json(results);
            });
        }
        catch (error) {
            console.error('Error al obtener las asignaturas de equivalencia:', error);
            throw new Error('No se pudo obtener las asignaturas de equivalencia.');
        }
    }
    catch (error) {
        console.error('Error al obtener historial académico:', error);
        throw new Error('No se pudo obtener el historial académico.');
    }
});
exports.obtenerHistorialAcademicoComp = obtenerHistorialAcademicoComp;
const obtenerHistorialAcademicoTI = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let cedula = '';
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            try {
                const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
                cedula = decodedToken.estudianteID;
            }
            catch (error) {
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
     JOIN mallacurricularti MC ON A.codigo = MC.asignaturaCodigo
     WHERE H.estudianteID = ? AND H.estado = 'Aprobada';
     
        `;
            connection.query(sql, [cedula], (error, results, fields) => {
                if (error) {
                    console.error('Error al ejecutar la consulta:', error);
                    throw new Error('No se pudo obtener las asignaturas de equivalencia.');
                }
                res.json(results);
            });
        }
        catch (error) {
            console.error('Error al obtener las asignaturas de equivalencia:', error);
            throw new Error('No se pudo obtener las asignaturas de equivalencia.');
        }
    }
    catch (error) {
        console.error('Error al obtener historial académico:', error);
        throw new Error('No se pudo obtener el historial académico.');
    }
});
exports.obtenerHistorialAcademicoTI = obtenerHistorialAcademicoTI;
const obtenerHistorialAcademicoTDE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let cedula = '';
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            try {
                const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
                cedula = decodedToken.estudianteID;
            }
            catch (error) {
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
     JOIN mallacurriculartde MC ON A.codigo = MC.asignaturaCodigo
     WHERE H.estudianteID = ? AND H.estado = 'Aprobada';
     
        `;
            connection.query(sql, [cedula], (error, results, fields) => {
                if (error) {
                    console.error('Error al ejecutar la consulta:', error);
                    throw new Error('No se pudo obtener las asignaturas de equivalencia.');
                }
                res.json(results);
            });
        }
        catch (error) {
            console.error('Error al obtener las asignaturas de equivalencia:', error);
            throw new Error('No se pudo obtener las asignaturas de equivalencia.');
        }
    }
    catch (error) {
        console.error('Error al obtener historial académico:', error);
        throw new Error('No se pudo obtener el historial académico.');
    }
});
exports.obtenerHistorialAcademicoTDE = obtenerHistorialAcademicoTDE;
const homologacionCompTI = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cedula = '';
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
            cedula = decodedToken.estudianteID;
        }
        catch (error) {
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
        connection.query(sql, [cedula], (error, results, fields) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                throw new Error('No se pudo obtener las asignaturas de equivalencia.');
            }
            res.json(results);
        });
    }
    catch (error) {
        console.error('Error al obtener las asignaturas de equivalencia:', error);
        throw new Error('No se pudo obtener las asignaturas de equivalencia.');
    }
});
exports.homologacionCompTI = homologacionCompTI;
const homologacionCompTDE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cedula = '';
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
            cedula = decodedToken.estudianteID;
        }
        catch (error) {
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
        equivalencia_computacion_tde E
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
        FROM MallaCurricularTDE
    ) MC2 ON A2.codigo = MC2.asignaturaCodigo
    WHERE 
    HA.estado = 'Aprobada' AND ES.idEstudiante = ?;

    `;
        connection.query(sql, [cedula], (error, results, fields) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                throw new Error('No se pudo obtener las asignaturas de equivalencia.');
            }
            res.json(results);
        });
    }
    catch (error) {
        console.error('Error al obtener las asignaturas de equivalencia:', error);
        throw new Error('No se pudo obtener las asignaturas de equivalencia.');
    }
});
exports.homologacionCompTDE = homologacionCompTDE;
const homologacionTIComp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cedula = '';
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
            cedula = decodedToken.estudianteID;
        }
        catch (error) {
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
        equivalencia_ti_computacion E
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
        connection.query(sql, [cedula], (error, results, fields) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                throw new Error('No se pudo obtener las asignaturas de equivalencia.');
            }
            res.json(results);
        });
    }
    catch (error) {
        console.error('Error al obtener las asignaturas de equivalencia:', error);
        throw new Error('No se pudo obtener las asignaturas de equivalencia.');
    }
});
exports.homologacionTIComp = homologacionTIComp;
const homologacionTITDE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cedula = '';
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
            cedula = decodedToken.estudianteID;
        }
        catch (error) {
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
        equivalencia_ti_tde E
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
        connection.query(sql, [cedula], (error, results, fields) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                throw new Error('No se pudo obtener las asignaturas de equivalencia.');
            }
            res.json(results);
        });
    }
    catch (error) {
        console.error('Error al obtener las asignaturas de equivalencia:', error);
        throw new Error('No se pudo obtener las asignaturas de equivalencia.');
    }
});
exports.homologacionTITDE = homologacionTITDE;
const homologacionTDEComp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cedula = '';
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
            cedula = decodedToken.estudianteID;
        }
        catch (error) {
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
        Equivalencia_TDE_Comp E
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
        connection.query(sql, [cedula], (error, results, fields) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                throw new Error('No se pudo obtener las asignaturas de equivalencia.');
            }
            res.json(results);
        });
    }
    catch (error) {
        console.error('Error al obtener las asignaturas de equivalencia:', error);
        throw new Error('No se pudo obtener las asignaturas de equivalencia.');
    }
});
exports.homologacionTDEComp = homologacionTDEComp;
const homologacionTDETI = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cedula = '';
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
            cedula = decodedToken.estudianteID;
        }
        catch (error) {
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
        equivalencia_tde_ti E
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
        connection.query(sql, [cedula], (error, results, fields) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                throw new Error('No se pudo obtener las asignaturas de equivalencia.');
            }
            res.json(results);
        });
    }
    catch (error) {
        console.error('Error al obtener las asignaturas de equivalencia:', error);
        throw new Error('No se pudo obtener las asignaturas de equivalencia.');
    }
});
exports.homologacionTDETI = homologacionTDETI;
const obtenerMallaComp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cedula = '';
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
            cedula = decodedToken.estudianteID;
        }
        catch (error) {
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
            MallaCurricularComputacion MTI ON A.codigo = MTI.asignaturaCodigo;
    `;
        connection.query(sql, [cedula], (error, results, fields) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                throw new Error('No se pudo obtener las asignaturas de equivalencia.');
            }
            res.json(results);
        });
    }
    catch (error) {
        console.error('Error al obtener las asignaturas de equivalencia:', error);
        throw new Error('No se pudo obtener las asignaturas de equivalencia.');
    }
});
exports.obtenerMallaComp = obtenerMallaComp;
const obtenerMallaTI = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cedula = '';
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
            cedula = decodedToken.estudianteID;
        }
        catch (error) {
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
        connection.query(sql, [cedula], (error, results, fields) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                throw new Error('No se pudo obtener las asignaturas de equivalencia.');
            }
            res.json(results);
        });
    }
    catch (error) {
        console.error('Error al obtener las asignaturas de equivalencia:', error);
        throw new Error('No se pudo obtener las asignaturas de equivalencia.');
    }
});
exports.obtenerMallaTI = obtenerMallaTI;
const obtenerMallaTDE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cedula = '';
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '123');
            cedula = decodedToken.estudianteID;
        }
        catch (error) {
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
            MallaCurricularTDE MTI ON A.codigo = MTI.asignaturaCodigo;
    `;
        connection.query(sql, [cedula], (error, results, fields) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                throw new Error('No se pudo obtener las asignaturas de equivalencia.');
            }
            res.json(results);
        });
    }
    catch (error) {
        console.error('Error al obtener las asignaturas de equivalencia:', error);
        throw new Error('No se pudo obtener las asignaturas de equivalencia.');
    }
});
exports.obtenerMallaTDE = obtenerMallaTDE;
