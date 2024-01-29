import express from "express"
import cors from "cors";

import routesUser from '../routes/user'
import Asignatura from "./asignatura";
import Carrera from "./carrera";
import Estudiante from "./estudiante";
import MallaCurricularComputacion from "./MallaCurricularComputacion";
import MallaCurricularTI from "./MallaCurricularTI";
import HistorialAcademico from "./HistorialAcademico";
import Equivalencia from "./Equivalencia";
import Equivalencia_computacion_ti from "./Equivalencia_computacion_ti";
import Equivalencia_ti_computacion from "./Equivalencia_ti_computacion";


export class Server {
    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Aplicacion corriendo en el puerto: " + this.port)
        });
    }

    routes() {
        this.app.use('/api/users', routesUser)
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors({
            origin: 'http://localhost:4200',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true,
        }));
    }

    async dbConnect() {
        try {
            await Asignatura.sync({ alter: true });
            await Carrera.sync({ alter: true });
            await Estudiante.sync({ alter: true });
            await Equivalencia.sync({ alter: true });
            await Equivalencia_computacion_ti.sync({ alter: true });
            await Equivalencia_ti_computacion.sync({ alter: true });
            await MallaCurricularComputacion.sync({ alter: true });
            await MallaCurricularTI.sync({ alter: true });
            await HistorialAcademico.sync({ alter: true });
            console.log("Connect");
        } catch (error) {
            console.log("Unable to connect: ", error);
        }
    }
}