import mysql.connector

# Conectar a la base de datos (ajusta la información de conexión según tu configuración)
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="1234",  # Deja la contraseña en blanco si no la has configurado
    database="practicas_tec"
)

# Crear un cursor
cursor = db.cursor()

# Función para verificar la homologación de una materia
def homologar_materia(id_estudiante, codigo_materia_origen):
    # Verificar si existe una equivalencia para la materia de origen
    cursor.execute("SELECT materia_destino FROM equivalencias WHERE materia_origen = %s", (codigo_materia_origen,))
    equivalencia = cursor.fetchone()

    if equivalencia:
        # Obtener el código de la materia de destino
        codigo_materia_destino = equivalencia[0]

        # Obtener el nombre del estudiante
        cursor.execute("SELECT nombre FROM estudiantes WHERE id_estudiante = %s", (id_estudiante,))
        nombre_estudiante = cursor.fetchone()[0]

        mensaje = f"Estudiante: {nombre_estudiante}\n"

        # Obtener información de la materia de origen (nombre, créditos, horas)
        cursor.execute("SELECT nombre, creditos, horas FROM materias_carrera_computacion WHERE codigo_materia = %s", (codigo_materia_origen,))
        info_origen = cursor.fetchone()
        nombre_materia_origen, creditos_materia_origen, horas_materia_origen = info_origen

        # Obtener información de la materia de destino (nombre, créditos, horas)
        cursor.execute("SELECT nombre, creditos, horas FROM materias_carrera_transformacion_digital WHERE codigo_materia = %s", (codigo_materia_destino,))
        info_destino = cursor.fetchone()
        nombre_materia_destino, creditos_materia_destino, horas_materia_destino = info_destino

        mensaje += f"Ha homologado la materia {nombre_materia_origen} ({creditos_materia_origen} créditos, {horas_materia_origen} horas) como {nombre_materia_destino} ({creditos_materia_destino} créditos, {horas_materia_destino} horas) en la Carrera de Transformación Digital.\n"

        # Obtener requisitos previos para la materia de origen y destino
        cursor.execute("SELECT requisito_id FROM requisitos WHERE materia_id = %s", (codigo_materia_origen,))
        requisitos_origen = [row[0] for row in cursor.fetchall()]
        cursor.execute("SELECT requisito_id FROM requisitos WHERE materia_id = %s", (codigo_materia_destino,))
        requisitos_destino = [row[0] for row in cursor.fetchall()]

        mensaje += f"Requisitos previos para {nombre_materia_origen} en la Carrera de Computación: {', '.join(requisitos_origen)}\n"
        mensaje += f"Requisitos previos para {nombre_materia_destino} en la Carrera de Transformación Digital: {', '.join(requisitos_destino)}"

        # Confirmar los cambios en la base de datos
        db.commit()

        return mensaje
    else:
        return f"No se encontró equivalencia para la materia {codigo_materia_origen}."

# Estudiante decide cambiarse de carrera y homologar
id_estudiante = 1  # ID del estudiante
materia_origen = 'DSOF_2034'  # Código de Programación Orientada a Objetos

resultado = homologar_materia(id_estudiante, materia_origen)
print(resultado)

# Cerrar la conexión a la base de datos
cursor.close()
db.close()
