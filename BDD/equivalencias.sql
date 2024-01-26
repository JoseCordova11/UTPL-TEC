-- Insertar ejemplos de equivalencias entre materias de diferentes carreras
-- Computacion a Transformacion DIgital
-- Equivalencias entre Computación y Transformación Digital
INSERT INTO equivalencias (materia_origen, materia_destino) 
VALUES
    ('DRBD_2005', 'DRBD_1011'), -- Base de Datos Avanzada en computaicon equivale a Base de Datos es equivalente a Base de datks en transformacion digital
    ('DSOF_2034', 'DSOF_1066'), -- Programación Orientada a Objetos en Computación es equivalente a Programación Orientada a Objetos en Transformación Digital
	('RELI_1105', 'RELI_1106'); -- Humanismo de computacion es equivalente a Humanismo de transformacion digital


-- Insertar ejemplos de estudiantes
-- Insertar estudiante Kevin Barrazueta
INSERT INTO estudiantes (id_estudiante, nombre, carrera_actual)
VALUES
    (1105586426, 'Kevin Barrazueta', 'Computacion');

-- Insertar calificaciones para Kevin Barrazueta
INSERT INTO calificaciones (id_estudiante, codigo_materia, nota, ciclo)
VALUES
    (1105586426, 'COMP_1078', 9.07, 1),
    (1105586426, 'DSOF_2030', 8.10, 1),
    (1105586426, 'COMP_1075', 8.69, 1),
    (1105586426, 'MATE_1103', 9.22, 1),
    (1105586426, 'RELI_1105', 9.70, 1),
    (1105586426, 'DSOF_1067', 9.27, 1),

    (1105586426, 'MATE_1108', 9.35, 1),
    (1105586426, 'MATE_1101', 9.40, 1),
    (1105586426, 'DSOF_2029', 8.55, 1),
    (1105586426, 'FISI_1039', 8.47, 1),
    (1105586426, 'DSOF_2034', 8.69, 1),

    (1105586426, 'RELI_2062', 8.66, 1),
    (1105586426, 'MATE_3100', 7.65, 1),
    (1105586426, 'DRBD_2004', 8.08, 1),
    (1105586426, 'ELEN_2008', 8.25, 1),
    (1105586426, 'COMP_2011', 8.94, 1),
    (1105586426, 'DSOF_2035', 8.54, 1),

    (1105586426, 'DSOF_2036', 8.20, 1),
    (1105586426, 'COMP_2010', 9.09, 1),
    (1105586426, 'DRBD_2005', 8.01, 1),
    (1105586426, 'COMP_2012', 9.40, 1),
    (1105586426, 'COMP_4011', 8.25, 1),
    (1105586426, 'DSOF_3036', 8.23, 1);



-- Insertar ejemplos de historial de homologaciones
-- Estudiante 1 cambia a Revolución Digital y homologa Programación Orientada a Objetos
INSERT INTO historial_homologaciones (id_estudiante, materia_origen, materia_destino, fecha_homologacion)
VALUES
    (1, 'DSOF_2034', 'REVD_104', NOW());

-- Ejemplo de homologación automática
INSERT INTO historial_homologaciones (id_estudiante, materia_origen, materia_destino, fecha_homologacion)
SELECT 
    id_estudiante,
    materia_origen,
    materia_destino,
    CURRENT_DATE AS fecha_homologacion
FROM inscripciones
JOIN equivalencias ON inscripciones.codigo_materia = equivalencias.materia_origen
WHERE inscripciones.ciclo = 1;
