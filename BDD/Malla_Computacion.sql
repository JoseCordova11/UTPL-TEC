-- Ciclo 1
INSERT INTO materias_carrera_computacion (codigo_materia, nombre, creditos, horas, ciclo)
VALUES
    ('COMP_1075', 'Fundamentos Computacionales', 3, 144, 1),
    ('MATE_1103', 'Fundamentos Matemáticos', 3, 144, 1),
    ('RELI_1105', 'Humanismo, Universidad y Cultura', 2, 96, 1),
    ('DSOF_1067', 'Introducción a la Programación', 3, 144, 1),
    ('COMP_1078', 'Computación y Sociedad', 2, 96, 1),
    ('DSOF_2030', 'Estructuras Discretas', 2, 96, 1);

-- Continuación de la inserción de materias para la Carrera de Computación
-- Ciclo 2
INSERT INTO materias_carrera_computacion (codigo_materia, nombre, creditos, horas, ciclo)
VALUES
    ('FISI_1039', 'Física Básica', 3, 144, 2),
    ('MATE_1108', 'Álgebra Lineal', 3, 144, 2),
    ('MATE_1101', 'Análisis Matemático Univariado', 3, 144, 2),
    ('DSOF_2029', 'Estructuras de Datos', 3, 144, 2),
    ('DSOF_2034', 'Programación Orientada a Objetos', 3, 144, 2);

-- Establecer requisitos para el ciclo 2
INSERT INTO requisitos (materia_id, requisito_id)
VALUES
    ('DSOF_2029', 'DSOF_2030'), -- Estructuras de Datos requiere estructuras discretas
    ('MATE_1101', 'MATE_1103'), -- Analisis Matematico Univariado requiere Fundamentos Matematicos
	('MATE_1108', 'MATE_1103'), -- Algebra lineal requiere Fundamentos Matematicos
    ('DSOF_2034', 'DSOF_1067'); -- Programación Orientada a Objetos requiere Introducción a la Programación

-- Ciclo 3
INSERT INTO materias_carrera_computacion (codigo_materia, nombre, creditos, horas, ciclo)
VALUES
    ('MATE_3100', 'Ecuaciones Diferenciales y Métodos Numéricos', 3, 144, 3),
    ('ELEN_2008', 'Lógica Digital', 3, 144, 3),
    ('DRBD_2004', 'Fundamentos de Base de Datos', 3, 144, 3),
	('COMP_2011', 'Practicum 1.1', 2, 96, 3),
    ('DSOF_2035', 'Programación Funcional y Reactiva', 3, 144, 3),
    ('RELI_2062', 'Antropología Básica', 2, 96, 3);

-- Establecer requisitos para el ciclo 3
INSERT INTO requisitos (materia_id, requisito_id)
VALUES
    ('DRBD_2004', 'DSOF_2029'), -- Fundamentos de Base de Datos requiere Estructura de datos
	('MATE_3100', 'MATE_1101'), -- Ecuaciones diferenciales requiere Analisis Matematico Univariado
	('RELI_2062', 'RELI_1105'), -- Antropologia Basica requiere Humanismo, universidad y cultura
	('DSOF_2035', 'DSOF_2034'); -- Programacion Funcional y Reactiva requiere Programacion Orientada a Objetos

-- Continuar con los ciclos restantes de la Carrera de Computación y agregar más materias


-- Continuación de la inserción de materias para la Carrera de Computación
-- Ciclo 4
INSERT INTO materias_carrera_computacion (codigo_materia, nombre, creditos, horas, ciclo)
VALUES
    ('COMP_2010', 'Arquitectura y Organización de Computadores', 2, 96, 4),
    ('DSOF_2036', 'Análisis de Algoritmos', 2, 96, 4),
    ('DRBD_2005', 'Base de Datos Avanzada', 3, 144, 4),
    ('COMP_4011', 'Programación Avanzada', 3, 144, 4),
	('COMP_2012', 'Practicum 1.2', 2, 96, 3),
    ('DSOF_3036', 'Prototipado', 3, 144, 4);

-- Establecer requisitos para el ciclo 4
INSERT INTO requisitos (materia_id, requisito_id)
VALUES
    ('COMP_2012', 'COMP_2011'), -- Practicum 1.2 requiere de Practicum 1.1
	('COMP_4011', 'DSOF_2035'), -- Programacion Avanzada requiere de Programacion Funcional y Reactiva
    ('DRBD_2005', 'DRBD_2004'); -- Base de Datos Avanzada requiere Fundamentos de Base de Datos

-- Ciclo 5
INSERT INTO materias_carrera_computacion (codigo_materia, nombre, creditos, horas, ciclo)
VALUES
    ('COMP_3011', 'Sistemas Operativos', 3, 144, 5),
    ('COMP_3013', 'Introducción a la Inteligencia de Negocios', 3, 144, 5),
    ('DSOF_3037', 'Ingeniería Web', 3, 144, 5),
    ('SIST_3011', 'Fundamentos de la Ingenieria de Software', 3, 144, 5),
    ('ESTA_3022', 'Estadística y Probabilidad', 2, 96, 5),
    ('COMP_3019', 'Practicum 2.1', 2, 96, 3),
    ('FILO_1114', 'Ética y Moral', 2, 96, 5);

-- Establecer requisitos para el ciclo 5
INSERT INTO requisitos (materia_id, requisito_id)
VALUES
    ('COMP_3011', 'COMP_2010'), -- Sistemas Operativos requiere Arquitectura y Organización de Computadores
    ('SIST_3011', 'DRBD_2005'), -- Fundamentos de la ingenieria de Software requiere de Programacion Avanzada, Base de datos Avanzada y Prototipado
	('SIST_3011', 'COMP_4011'), ('SIST_3011', 'DSOF_3036'),
	('DSOF_3037', 'COMP_4011'), -- Ingenieria Web requiere de Programacion Avanzada
	('COMP_3013', 'DRBD_2005'), -- Introduccion a la inteligencia de negocios requiere de Base de Datos Avanzada
    ('FILO_1114', 'MATE_1103'), -- Estadistica y Probabilidad requiere de Fundamentos matematicos;
	('COMP_3019', 'COMP_2012'); -- Practicum 2.1 requiere de Practicum 1.2;

-- Continuar con los ciclos restantes de la Carrera de Computación y agregar más materias y requisitos
