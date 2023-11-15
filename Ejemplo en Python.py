import mysql.connector

class Estudiante:
    def __init__(self, carrera, materias_aprobadas):
        self.carrera = carrera
        self.materias_aprobadas = set(materias_aprobadas)

def obtener_equivalencias():
    conexion = mysql.connector.connect(
        host="localhost",
        user="root",
        password="1234",
        database="practicas_tec"
    )
    cursor = conexion.cursor(dictionary=True)

    consulta = "SELECT materia_origen, materia_destino FROM equivalencias"
    cursor.execute(consulta)
    equivalencias = {row['materia_origen']: row['materia_destino'] for row in cursor.fetchall()}

    cursor.close()
    conexion.close()

    return equivalencias

def homologar(estudiante, equivalencias):
    materias_homologadas = set()
    for materia_aprobada in estudiante.materias_aprobadas:
        if materia_aprobada in equivalencias:
            materia_homologada = equivalencias[materia_aprobada]
            materias_homologadas.add(materia_homologada)
        else:
            materias_homologadas.add(materia_aprobada)

    return materias_homologadas

def obtener_nombre_materias(carrera, codigos_materias):
    conexion = mysql.connector.connect(
        host="localhost",
        user="root",
        password="1234",
        database="practicas_tec"
    )
    cursor = conexion.cursor(dictionary=True)

    consulta = f"SELECT codigo_materia, nombre FROM materias_carrera_{carrera}"
    cursor.execute(consulta)
    nombres_materias = {row['codigo_materia']: row['nombre'] for row in cursor.fetchall()}

    cursor.close()
    conexion.close()

    nombres_aprobadas = [{'codigo': codigo, 'nombre': nombres_materias.get(codigo, 'No encontrado')} for codigo in codigos_materias]

    return nombres_aprobadas

# Simular el estudiante de computación con materias aprobadas
estudiante_computacion = Estudiante(
    carrera="computacion",
    materias_aprobadas=[
        'COMP_1075', 'MATE_1103', 'RELI_1105', 'DSOF_1067', 'COMP_1078', 'DSOF_2030',
        'FISI_1039', 'MATE_1108', 'MATE_1101', 'DSOF_2029', 'DSOF_2034'
    ]
)

# Obtener equivalencias desde la base de datos
equivalencias = obtener_equivalencias()

# Homologar las materias del estudiante de computación a transformación digital
materias_homologadas = homologar(estudiante_computacion, equivalencias)

# Mostrar resultados con nombres y códigos de las materias
print("Materias homologadas:")
nombres_homologadas = obtener_nombre_materias("transformacion_digital", materias_homologadas)
for materia in nombres_homologadas:
    print(f"- {materia['codigo']}: {materia['nombre']}")

# Calcular materias restantes en la nueva carrera
materias_restantes = set(estudiante_computacion.materias_aprobadas) - materias_homologadas

print("\nMaterias restantes en la nueva carrera:")
nombres_restantes = obtener_nombre_materias("transformacion_digital", materias_restantes)
for materia in nombres_restantes:
    print(f"- {materia['codigo']}: {materia['nombre']}")
