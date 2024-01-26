import mysql.connector
from prettytable import PrettyTable

# Conectar a la base de datos
conexion = mysql.connector.connect(
    host="localhost",
    user="root",
    password="1234",
    database="practicas_tec"
)

# Crear un cursor para ejecutar consultas
cursor = conexion.cursor()

# Definir equivalencias entre materias de Computación y Transformación Digital
equivalencias = [
    ('DRBD_2005', 'DRBD_1011'),
    ('DSOF_2034', 'DSOF_1066'),
    ('RELI_1105', 'RELI_1106')
]

# ID del estudiante simulado
id_estudiante = 1105586426

# Obtener las calificaciones del estudiante con decimales y nombres de materias
cursor.execute(f"SELECT c.codigo_materia, m.nombre, c.nota, c.ciclo FROM calificaciones c JOIN materias_carrera_computacion m ON c.codigo_materia = m.codigo_materia WHERE c.id_estudiante = {id_estudiante}")
calificaciones = {(codigo, nombre): (float(nota), ciclo) for codigo, nombre, nota, ciclo in cursor.fetchall()}

# Función para homologar una materia
def homologar_materia(materia):
    for equivalencia in equivalencias:
        if materia == equivalencia[0]:
            return equivalencia[1]
        elif materia == equivalencia[1]:
            return equivalencia[0]
    return materia

# Obtener materias aprobadas en la carrera de origen
materias_aprobadas_origen = {(codigo, nombre): (nota, ciclo) for (codigo, nombre), (nota, ciclo) in calificaciones.items() if nota >= 7}

# Homologar las materias aprobadas a la nueva carrera
materias_homologadas_destino = {homologar_materia(codigo): (nota, ciclo) for (codigo, nombre), (nota, ciclo) in materias_aprobadas_origen.items() if homologar_materia(codigo) != codigo}

# Identificar materias no homologadas
materias_no_homologadas = {(codigo, nombre): (nota, ciclo) for (codigo, nombre), (nota, ciclo) in materias_aprobadas_origen.items() if (codigo, nombre) not in materias_homologadas_destino}

# Consultar la malla de la carrera de origen (Computación)
cursor.execute("SELECT codigo_materia, nombre, ciclo FROM materias_carrera_computacion")
materias_carrera_origen = {(codigo, nombre): (nombre, ciclo) for codigo, nombre, ciclo in cursor.fetchall()}

# Obtener ciclos únicos de la carrera de destino (Transformación Digital)
ciclos_destino = set(ciclo for (codigo, nombre), (nombre, ciclo) in materias_carrera_origen.items() if homologar_materia(codigo) not in materias_homologadas_destino)

# Mostrar resultados con PrettyTable
def print_pretty_table(title, headers, data):
    table = PrettyTable()
    table.title = title
    table.field_names = headers
    for row in data:
        table.add_row(row)
    print(table)

print_pretty_table("Materias Aprobadas en la Carrera de Origen (Computación)", ["Código", "Nombre", "Nota", "Ciclo"], [(codigo, nombre, nota, ciclo) for (codigo, nombre), (nota, ciclo) in materias_aprobadas_origen.items()])
print_pretty_table("Materias Homologadas en la Carrera de Destino (Transformación Digital)", ["Código", "Nombre", "Nota", "Ciclo"], [(codigo, materias_carrera_origen.get((codigo, ''), ('', ''))[0], nota, ciclo) for codigo, (nota, ciclo) in materias_homologadas_destino.items()])
print_pretty_table("Materias No Homologadas", ["Código", "Nombre", "Nota", "Ciclo"], [(codigo, nombre, nota, ciclo) for (codigo, nombre), (nota, ciclo) in materias_no_homologadas.items()])
# Obtener ciclos únicos de la carrera de origen (Computación)
ciclos_origen = set(ciclo for (codigo, nombre), (nombre, ciclo) in materias_carrera_origen.items())

# Mostrar materias faltantes en la nueva carrera (Transformación Digital)
print_pretty_table("Materias Faltantes en la Nueva Carrera (Transformación Digital)", ["Ciclo", "Código", "Nombre"], [(ciclo_origen, codigo, nombre) for ciclo_origen in sorted(ciclos_origen) for (codigo, nombre), (_, _) in materias_carrera_origen.items() if homologar_materia(codigo) not in materias_homologadas_destino])

# Cerrar la conexión a la base de datos
cursor.close()
conexion.close()
