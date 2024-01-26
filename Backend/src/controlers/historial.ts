import jwt from 'jsonwebtoken';
import HistorialAcademico from '../models/HistorialAcademico';

// La función para obtener el historial académico basado en el token JWT
const obtenerHistorialAcademico = async (token: string) => {
    try {
        // Decodifica el token para obtener la información del usuario
        const decodedToken = jwt.verify(token, '123'); // Reemplaza 'tu_secreto_jwt' con tu clave secreta

        // Extrae el estudianteID del token decodificado
        const estudianteID = decodedToken;

        // Busca el historial académico basado en el estudianteID
        const historial = await HistorialAcademico.findAll({
            where: { estudianteID },
        });

        return historial;
    } catch (error) {
        // Maneja errores, por ejemplo, si el token no es válido
        console.error('Error al obtener historial académico:', error);
        throw new Error('No se pudo obtener el historial académico.');
    }
};

export default obtenerHistorialAcademico;
