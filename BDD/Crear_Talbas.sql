use practicas_tec;

-- Tabla para la Carrera de Computación
CREATE TABLE materias_carrera_computacion (
    codigo_materia VARCHAR(10) UNIQUE PRIMARY KEY,
    nombre VARCHAR(255),
    creditos INT,
    horas INT,
    ciclo INT
);

CREATE TABLE materias_carrera_tecnologias_informacion (
    codigo_materia VARCHAR(10) UNIQUE PRIMARY KEY,
    nombre VARCHAR(255),
    creditos INT,
    horas INT,
    ciclo INT
);

-- Tabla para Transformación Digital
CREATE TABLE materias_carrera_transformacion_digital (
    codigo_materia VARCHAR(10) UNIQUE PRIMARY KEY,
    nombre VARCHAR(255),
    creditos INT,
    horas INT,
    ciclo INT
);

-- Tabla para requisitos
CREATE TABLE requisitos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    materia_id VARCHAR(10),
    requisito_id VARCHAR(10)
);

-- Crear la tabla de estudiantes
CREATE TABLE estudiantes (
    id_estudiante INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    carrera_actual VARCHAR(255)
);

-- Crear la tabla de equivalencias
CREATE TABLE equivalencias (
    id_equivalencia INT AUTO_INCREMENT PRIMARY KEY,
    materia_origen VARCHAR(255),
    materia_destino VARCHAR(255)
);

-- Crear la tabla de historial de homologaciones
CREATE TABLE historial_homologaciones (
    id_homologacion INT AUTO_INCREMENT PRIMARY KEY,
    id_estudiante INT,
    materia_origen VARCHAR(255),
    materia_destino VARCHAR(255),
    fecha_homologacion DATE,
    FOREIGN KEY (id_estudiante) REFERENCES estudiantes(id_estudiante)
);

CREATE TABLE calificaciones (
    id_calificacion INT AUTO_INCREMENT PRIMARY KEY,
    id_estudiante INT,
    codigo_materia VARCHAR(10),
    nota INT,
    ciclo INT,
    FOREIGN KEY (id_estudiante) REFERENCES estudiantes(id_estudiante),
    FOREIGN KEY (codigo_materia) REFERENCES materias_carrera_computacion(codigo_materia)
);
