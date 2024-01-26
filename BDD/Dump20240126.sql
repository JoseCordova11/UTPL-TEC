CREATE DATABASE  IF NOT EXISTS `sistema-homologador` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sistema-homologador`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: sistema-homologador
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `asignaturas`
--

DROP TABLE IF EXISTS `asignaturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asignaturas` (
  `codigo` varchar(10) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `cargaHoraria` int NOT NULL,
  `creditos` int NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asignaturas`
--

LOCK TABLES `asignaturas` WRITE;
/*!40000 ALTER TABLE `asignaturas` DISABLE KEYS */;
INSERT INTO `asignaturas` VALUES ('ADMI_4038','Emprendimiento',96,2),('ADMI_4104','Gestión de Proyectos',96,2),('ADMI_5077','Gestión de Proyectos',96,2),('ADMI_5078','Emprendimiento de base tecnológica I',96,2),('ADMI_5079','Emprendimiento de Base Tecnológica II',96,2),('COMP_1075','Fundamentos Computacionales',144,3),('COMP_1078','Computación y Sociedad',96,2),('COMP_1081','Computación y Sociedad',96,2),('COMP_1082','Fundamentos de Tecnologías de la Información',144,3),('COMP_2010','Arquitectura y Organización de Computadores',96,2),('COMP_2011','Prácticum 1.1',96,2),('COMP_2012','Prácticum 1.2',96,2),('COMP_3011','Sistemas Operativos',96,2),('COMP_3012','Teoría de Autómatas y Compiladores',96,2),('COMP_3013','Introducción a la Inteligencia de Negocios',96,2),('COMP_3014','Prácticum 2.2',96,2),('COMP_3019','Prácticum 2.1',96,2),('COMP_4010','Prácticum 3: Servicio Comunitario',96,2),('COMP_4011','Programación Avanzada',144,3),('COMP_4012','Fundamentos de Inteligencia Artificial',96,2),('COMP_4013','Computación Paralela y Distribuida',96,2),('COMP_4014','Representación Avanzada del Conocimiento y Razonamiento',144,3),('COMP_4015','Prácticum 4.1',144,3),('COMP_4016','Organización y Administración de Infraestructura de TI',144,3),('COMP_5020','Sistemas Inteligentes',144,3),('COMP_5022','Prácticum 4.2',192,4),('COMP_5023','Tecnologías Emergentes',96,2),('DRBD_2004','Fundamentos de Base de Datos',144,3),('DRBD_2005','Base de Datos Avanzada',144,3),('DRBD_2006','Fundamentos de Base de Datos',144,3),('DRBD_3014','(Itinerario II) Ciencias de datos para la Gestión inteligente del territorio: Fundamentos de Análisis de Datos',144,3),('DRBD_3019','Comunicación de Datos',96,2),('DRBD_3020','Administración de Bases de Datos',96,2),('DRBD_3021','Redes de Dispositivos',96,2),('DRBD_4012','Fundamentos de Redes',144,3),('DRBD_4014','Redes y Sistemas Distribuidos',144,3),('DRBD_4015','(Itinerario II) Ciencias de datos para la Gestión inteligente del territorio: Interoperabilidad y explotación de datos en ecosistemas heterogéneos',144,3),('DRBD_4016','(Itinerario II) Ciencias de datos para la Gestión inteligente del territorio: Análisis y visualización de grandes volúmenes de datos',144,3),('DRBD_4018','Arquitectura de Redes',96,2),('DRBD_4019','Sistemas Distribuidos',96,2),('DSOF_1067','Introducción a la Programación',144,3),('DSOF_1070','Algoritmos y Resolución de Problemas',144,3),('DSOF_1071','Fundamentos de Hardware',144,3),('DSOF_1072','Computación Ubícua',96,2),('DSOF_1073','Fundamentos de Programación',144,3),('DSOF_2029','Estructuras de Datos',144,3),('DSOF_2030','Estructuras Discretas',96,2),('DSOF_2034','Programación Orientada a Objetos',144,3),('DSOF_2035','Programación Funcional y Reactiva',144,3),('DSOF_2036','Análisis de Algoritmos',96,2),('DSOF_2038','Estructuras Discretas',96,2),('DSOF_2039','Arquitectura de Computadoras y Sistemas Operativos',144,3),('DSOF_2040','Programación Orientada a Objetos',144,3),('DSOF_2041','Estructuras de Datos',144,3),('DSOF_2042','Comunicación Técnica y Profesional',96,2),('DSOF_2043','Tecnologías Web',96,2),('DSOF_2044','Modelado de Sistemas',96,2),('DSOF_2045','Prácticum 1',192,4),('DSOF_3035','Gestión de la Calidad de Software',96,2),('DSOF_3036','Prototipado',144,3),('DSOF_3037','Ingeniería Web',96,2),('DSOF_3038','(Itinerario I) Desarrollo basado en plataformas: Plataformas Web',144,3),('DSOF_3039','Ingeniería de Requisitos',144,3),('DSOF_3040','Fundamentos de Interacción Humano Computador',96,2),('DSOF_3041','Prácticum 2',192,4),('DSOF_3042','Desarrollo Web',96,2),('DSOF_3043','Planificación Estratégica y Sistemas de Calidad Empresarial',96,2),('DSOF_3044','Metodologías de Desarrollo',144,3),('DSOF_3045','Gestión de la Calidad de Software',96,2),('DSOF_3046','Ingeniería de Requisitos',144,3),('DSOF_3047','Itinerario 1: Plataformas Emergentes',144,3),('DSOF_3048','Itinerario 2: Desarrollo Basado en Plataformas Web',144,3),('DSOF_4069','Arquitectura de Software',144,3),('DSOF_4070','(Itinerario I) Desarrollo basado en plataformas: Plataformas Móviles',144,3),('DSOF_4071','(Itinerario I) Desarrollo basado en plataformas: Plataformas para Juegos',144,3),('DSOF_4072','Arquitectura de Software',144,3),('DSOF_4073','Arquitectura de Empresarial',144,3),('DSOF_4074','Itinerario I: Modelado de Usuario',144,3),('DSOF_4075','Itinerario II: Desarrollo Basado en Plataformas Móviles',144,3),('DSOF_4076','Prácticum 3 Servicio comunitario',96,2),('DSOF_4077','Fundamentos y Aplicación de Seguridad de la Información',96,2),('DSOF_4078','Prácticum 4.1',144,3),('DSOF_4079','Itinerario I: Aplicación de Interacción Humano Computador',144,3),('DSOF_4080','Itinerario II: Programación Integrativa',144,3),('DSOF_4081','Gobernanza de Tecnologías de la Información',144,3),('DSOF_4082','Proyectos de Tecnologías de la Información',96,2),('DSOF_4083','Prácticum 4.2',192,4),('DSOF_5025','Seguridad de la Información',96,2),('EDUC_1139','Metodología de Investigación y Técnicas de Estudio',96,2),('ELEN_2008','Lógica Digital',96,2),('ESTA_2029','Estadística para las ingenierías y la arquitectura',96,2),('ESTA_3022','Estadística y Probabilidad',96,2),('ESTA_4009','Aplicación de Matemáticas y Estadística en TI',96,2),('FILO_1114','Ética y Moral',96,2),('FISI_1039','Física Básica',144,3),('LITE_1108','Composición de Textos Científicos',96,2),('MATE_1101','Análisis Matemático Univariado',144,3),('MATE_1103','Fundamentos Matemáticos',144,3),('MATE_1108','Álgebra Lineal',144,3),('MATE_1114','Cálculo Diferencial',96,2),('MATE_2032','Cálculo Integral',96,2),('MATE_3100','Ecuaciones Diferenciales y Métodos Numéricos',144,3),('RELI_1105','Humanismo, Universidad y Cultura',96,2),('RELI_2062','Antropología básica',96,2),('SIST_3011','Fundamentos de Ingeniería de Software',144,3),('SIST_3012','Fundamentos de Ingeniería de Software',144,3),('SIST_5018','Evaluación de la Seguridad en Sistemas de Tecnologías de la Información',96,2),('UTE_1108','Composición de Textos Científicos',96,2);
/*!40000 ALTER TABLE `asignaturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carreras`
--

DROP TABLE IF EXISTS `carreras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carreras` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `modalidad` varchar(20) NOT NULL,
  `duracionCiclos` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carreras`
--

LOCK TABLES `carreras` WRITE;
/*!40000 ALTER TABLE `carreras` DISABLE KEYS */;
INSERT INTO `carreras` VALUES (1,'Computación','Presencial',9),(2,'Tecnologías de la Información','A Distancia',9),(3,'Transformación Digital de Empresas','A Distancia',4);
/*!40000 ALTER TABLE `carreras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equivalencia`
--

DROP TABLE IF EXISTS `equivalencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equivalencia` (
  `idEquivalencia` int NOT NULL AUTO_INCREMENT,
  `asignaturaOrigenCodigo` varchar(10) NOT NULL,
  `asignaturaDestinoCodigo` varchar(10) NOT NULL,
  PRIMARY KEY (`idEquivalencia`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equivalencia`
--

LOCK TABLES `equivalencia` WRITE;
/*!40000 ALTER TABLE `equivalencia` DISABLE KEYS */;
INSERT INTO `equivalencia` VALUES (1,'DSOF_1070','COMP_1075'),(2,'MATE_1103','MATE_1103'),(3,'RELI_1105','RELI_1105'),(4,'DSOF_1073','DSOF_1067'),(5,'COMP_1081','COMP_1078'),(6,'DSOF_2038','DSOF_2030'),(7,'MATE_1108','MATE_1108'),(8,'MATE_1114','MATE_1101'),(9,'DSOF_2041','DSOF_2029'),(10,'DSOF_2040','DSOF_2034'),(11,'DRBD_2006','DRBD_2004'),(12,'RELI_2062','RELI_2062'),(13,'DSOF_1071','COMP_2010'),(14,'DSOF_2039','COMP_3011'),(15,'DSOF_2043','DSOF_3037'),(16,'ESTA_2029','ESTA_3022'),(17,'FILO_1114','FILO_1114'),(18,'SIST_3012','SIST_3011'),(19,'DRBD_3019','DRBD_4012'),(20,'DSOF_3046','DSOF_3039'),(21,'DSOF_3045','DSOF_3035'),(22,'DSOF_3048','DSOF_3038'),(23,'DRBD_3021','DRBD_4014'),(24,'DRBD_4018','DRBD_4014'),(25,'DSOF_4072','DSOF_4069'),(26,'ADMI_4038','ADMI_4038'),(27,'DSOF_4075','DSOF_4070'),(28,'UTE_1108','LITE_1108'),(29,'ADMI_4104','ADMI_5077'),(30,'DSOF_4077','DSOF_5025'),(31,'COMP_1075','DSOF_1070'),(32,'MATE_1103','MATE_1103'),(33,'COMP_1078','COMP_1081'),(34,'RELI_1105','RELI_1105'),(35,'MATE_1108','MATE_1108'),(36,'MATE_1101','MATE_1114'),(37,'DSOF_1067','DSOF_1073'),(38,'RELI_2062','RELI_2062'),(39,'DSOF_2030','DSOF_2038'),(40,'COMP_2010','DSOF_2039'),(41,'SIST_3011','SIST_3012'),(42,'DSOF_2034','DSOF_2040'),(43,'DSOF_2029','DSOF_2041'),(44,'FILO_1114','FILO_1114'),(45,'DSOF_3037','DSOF_2043'),(46,'DRBD_2004','DRBD_2006'),(47,'ESTA_3022','ESTA_2029'),(48,'DRBD_4012','DRBD_3019'),(49,'DSOF_3046','DSOF_3039'),(50,'DSOF_3045','DSOF_3045'),(51,'DSOF_3038','DSOF_3048'),(52,'ADMI_5077','ADMI_4104'),(53,'DRBD_4014','DRBD_4018'),(54,'DSOF_4069','DSOF_4072'),(55,'ADMI_4038','ADMI_4038'),(56,'DSOF_4075','DSOF_4070'),(57,'UTE_1108','LITE_1108'),(58,'ADMI_4104','ADMI_5077'),(59,'DSOF_4077','DSOF_5025');
/*!40000 ALTER TABLE `equivalencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiantes`
--

DROP TABLE IF EXISTS `estudiantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiantes` (
  `idEstudiante` varchar(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`idEstudiante`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `email_5` (`email`),
  UNIQUE KEY `email_6` (`email`),
  UNIQUE KEY `email_7` (`email`),
  UNIQUE KEY `email_8` (`email`),
  UNIQUE KEY `email_9` (`email`),
  UNIQUE KEY `email_10` (`email`),
  UNIQUE KEY `email_11` (`email`),
  UNIQUE KEY `email_12` (`email`),
  UNIQUE KEY `email_13` (`email`),
  UNIQUE KEY `email_14` (`email`),
  UNIQUE KEY `email_15` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiantes`
--

LOCK TABLES `estudiantes` WRITE;
/*!40000 ALTER TABLE `estudiantes` DISABLE KEYS */;
INSERT INTO `estudiantes` VALUES ('1105589426','Kevin Alexander','Barrazueta Quizhpe','kabarrazueta@utpl.edu.ec','$2b$10$FbaAkqqq78RwSXNWkPO9xen1ipvNK65.M8QFXz.QrZdls1Sz3ASh.');
/*!40000 ALTER TABLE `estudiantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historialacademico`
--

DROP TABLE IF EXISTS `historialacademico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historialacademico` (
  `idHistorial` int NOT NULL AUTO_INCREMENT,
  `estudianteID` varchar(11) NOT NULL,
  `asignaturaCodigo` varchar(10) NOT NULL,
  `calificacion` int DEFAULT NULL,
  `estado` varchar(20) NOT NULL,
  PRIMARY KEY (`idHistorial`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historialacademico`
--

LOCK TABLES `historialacademico` WRITE;
/*!40000 ALTER TABLE `historialacademico` DISABLE KEYS */;
INSERT INTO `historialacademico` VALUES (1,'1105589426','COMP_1078',9,'Aprobada'),(2,'1105589426','DSOF_2030',8,'Aprobada'),(3,'1105589426','COMP_1075',9,'Aprobada'),(4,'1105589426','MATE_1103',9,'Aprobada'),(5,'1105589426','RELI_1105',10,'Aprobada'),(6,'1105589426','DSOF_1067',9,'Aprobada'),(7,'1105589426','MATE_1108',9,'Aprobada'),(8,'1105589426','MATE_1101',9,'Aprobada'),(9,'1105589426','DSOF_2029',9,'Aprobada'),(10,'1105589426','FISI_1039',8,'Aprobada'),(11,'1105589426','DSOF_2034',9,'Aprobada'),(12,'1105589426','RELI_2062',9,'Aprobada'),(13,'1105589426','MATE_3100',8,'Aprobada'),(14,'1105589426','DRBD_2004',8,'Aprobada'),(15,'1105589426','ELEN_2008',8,'Aprobada'),(16,'1105589426','COMP_2011',9,'Aprobada'),(17,'1105589426','DSOF_2035',9,'Aprobada'),(18,'1105589426','DSOF_2036',8,'Aprobada'),(19,'1105589426','COMP_2010',9,'Aprobada'),(20,'1105589426','DRBD_2005',8,'Aprobada'),(21,'1105589426','COMP_2012',9,'Aprobada'),(22,'1105589426','COMP_4011',8,'Aprobada'),(23,'1105589426','DSOF_3036',8,'Aprobada'),(24,'1105589426','ESTA_3022',NULL,'Pendiente'),(25,'1105589426','FILO_1114',NULL,'Pendiente'),(26,'1105589426','SIST_3011',NULL,'Pendiente'),(27,'1105589426','DSOF_3037',NULL,'Pendiente'),(28,'1105589426','COMP_3013',NULL,'Pendiente'),(29,'1105589426','COMP_3019',NULL,'Pendiente'),(30,'1105589426','COMP_3011',NULL,'Pendiente'),(31,'1105589426','ITCM_3000',NULL,'Pendiente'),(32,'1105589426','ITCM_3000',NULL,'Pendiente'),(33,'1105589426','DRBD_4012',NULL,'Pendiente'),(34,'1105589426','DSOF_3035',NULL,'Pendiente'),(35,'1105589426','DSOF_3039',NULL,'Pendiente'),(36,'1105589426','COMP_3014',NULL,'Pendiente'),(37,'1105589426','COMP_3012',NULL,'Pendiente'),(38,'1105589426','ITCM_4000',NULL,'Pendiente'),(39,'1105589426','ITCM_4000',NULL,'Pendiente'),(40,'1105589426','DSOF_4069',NULL,'Pendiente'),(41,'1105589426','ADMI_4038',NULL,'Pendiente'),(42,'1105589426','COMP_4012',NULL,'Pendiente'),(43,'1105589426','COMP_4010',NULL,'Pendiente'),(44,'1105589426','DRBD_4014',NULL,'Pendiente');
/*!40000 ALTER TABLE `historialacademico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mallacurricularcomputacion`
--

DROP TABLE IF EXISTS `mallacurricularcomputacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mallacurricularcomputacion` (
  `idMalla` int NOT NULL,
  `carreraID` int NOT NULL,
  `asignaturaCodigo` varchar(10) NOT NULL,
  `ciclo` int NOT NULL,
  PRIMARY KEY (`idMalla`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mallacurricularcomputacion`
--

LOCK TABLES `mallacurricularcomputacion` WRITE;
/*!40000 ALTER TABLE `mallacurricularcomputacion` DISABLE KEYS */;
INSERT INTO `mallacurricularcomputacion` VALUES (1,1,'COMP_1075',1),(2,1,'RELI_1105',1),(3,1,'DSOF_1067',1),(4,1,'COMP_1078',1),(5,1,'DSOF_2030',1),(6,1,'FISI_1039',2),(7,1,'MATE_1108',2),(8,1,'MATE_1101',2),(9,1,'DSOF_2029',2),(10,1,'DSOF_2034',2),(11,1,'MATE_3100',3),(12,1,'ELEN_2008',3),(13,1,'DRBD_2004',3),(14,1,'DSOF_2035',3),(15,1,'RELI_2062',3),(16,1,'COMP_2011',3),(17,1,'COMP_2010',4),(18,1,'DSOF_2036',4),(19,1,'DRBD_2005',4),(20,1,'COMP_4011',4),(21,1,'DSOF_3036',4),(22,1,'COMP_2012',4),(23,1,'COMP_3011',5),(24,1,'COMP_3013',5),(25,1,'DSOF_3037',5),(26,1,'ESTA_3022',5),(27,1,'FILO_1114',5),(28,1,'SIST_3011',5),(29,1,'COMP_3019',5),(30,1,'COMP_3012',6),(31,1,'DRBD_4012',6),(32,1,'DSOF_3039',6),(33,1,'DSOF_3035',6),(34,1,'DSOF_3038',6),(35,1,'DRBD_3014',6),(36,1,'COMP_3014',6),(37,1,'DRBD_4014',7),(38,1,'COMP_4012',7),(39,1,'DSOF_4069',7),(40,1,'ADMI_4038',7),(41,1,'DSOF_4070',7),(42,1,'DRBD_4015',7),(43,1,'COMP_4010',7),(44,1,'COMP_4013',8),(45,1,'COMP_4014',8),(46,1,'ADMI_5078',8),(47,1,'LITE_1108',8),(48,1,'DSOF_4071',8),(49,1,'DRBD_4016',8),(50,1,'COMP_4015',8),(51,1,'ADMI_5077',9),(52,1,'DSOF_5025',9),(53,1,'COMP_5023',9),(54,1,'ADMI_5079',9),(55,1,'COMP_5020',9),(56,1,'COMP_5022',9);
/*!40000 ALTER TABLE `mallacurricularcomputacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mallacurricularti`
--

DROP TABLE IF EXISTS `mallacurricularti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mallacurricularti` (
  `idMalla` int NOT NULL,
  `carreraID` int NOT NULL,
  `asignaturaCodigo` varchar(10) NOT NULL,
  `ciclo` int NOT NULL,
  PRIMARY KEY (`idMalla`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mallacurricularti`
--

LOCK TABLES `mallacurricularti` WRITE;
/*!40000 ALTER TABLE `mallacurricularti` DISABLE KEYS */;
INSERT INTO `mallacurricularti` VALUES (1,2,'DSOF_1070',1),(2,2,'MATE_1103',1),(3,2,'COMP_1082',1),(4,2,'EDUC_1139',1),(5,2,'COMP_1081',1),(6,2,'RELI_1105',1),(7,2,'MATE_1108',2),(8,2,'MATE_1114',2),(9,2,'DSOF_1071',2),(10,2,'DSOF_1072',2),(11,2,'DSOF_1073',2),(12,2,'RELI_2062',2),(13,2,'MATE_2032',3),(14,2,'DSOF_2038',3),(15,2,'DSOF_2039',3),(16,2,'DSOF_2040',3),(17,2,'DSOF_2041',3),(18,2,'FILO_1114',3),(19,2,'DSOF_2042',4),(20,2,'DSOF_2043',4),(21,2,'DRBD_2006',4),(22,2,'DSOF_2044',4),(23,2,'DSOF_2045',4),(24,2,'ESTA_2029',4),(25,2,'DRBD_3019',5),(26,2,'DSOF_3040',5),(27,2,'SIST_3012',5),(28,2,'DSOF_3041',5),(29,2,'DRBD_3020',5),(30,2,'DSOF_3042',5),(31,2,'DRBD_3021',6),(32,2,'DSOF_3043',6),(33,2,'DSOF_3044',6),(34,2,'DSOF_3045',6),(35,2,'DSOF_3046',6),(36,2,'DSOF_3047',6),(37,2,'DSOF_3048',6),(38,2,'ADMI_4104',7),(39,2,'DRBD_4018',7),(40,2,'DSOF_4072',7),(41,2,'DSOF_4073',7),(42,2,'DSOF_4074',7),(43,2,'DSOF_4075',7),(44,2,'DSOF_4076',7),(45,2,'DSOF_4077',8),(46,2,'ESTA_4009',8),(47,2,'DRBD_4019',8),(48,2,'COMP_4016',8),(49,2,'DSOF_4078',8),(50,2,'DSOF_4079',8),(51,2,'DSOF_4080',8),(52,2,'DSOF_4081',9),(53,2,'SIST_5018',9),(54,2,'DSOF_4082',9),(55,2,'DSOF_4083',9),(56,2,'ADMI_4038',9),(57,2,'UTE_1108',9);
/*!40000 ALTER TABLE `mallacurricularti` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-26 12:08:50
