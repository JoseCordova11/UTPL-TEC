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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("../routes/user"));
const asignatura_1 = __importDefault(require("./asignatura"));
const carrera_1 = __importDefault(require("./carrera"));
const estudiante_1 = __importDefault(require("./estudiante"));
const MallaCurricularComputacion_1 = __importDefault(require("./MallaCurricularComputacion"));
const MallaCurricularTI_1 = __importDefault(require("./MallaCurricularTI"));
const HistorialAcademico_1 = __importDefault(require("./HistorialAcademico"));
const Equivalencia_1 = __importDefault(require("./Equivalencia"));
const Equivalencia_computacion_ti_1 = __importDefault(require("./Equivalencia_computacion_ti"));
const Equivalencia_ti_computacion_1 = __importDefault(require("./Equivalencia_ti_computacion"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Aplicacion corriendo en el puerto: " + this.port);
        });
    }
    routes() {
        this.app.use('/api/users', user_1.default);
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)({
            origin: 'http://localhost:4200',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true,
        }));
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield asignatura_1.default.sync({ alter: true });
                yield carrera_1.default.sync({ alter: true });
                yield estudiante_1.default.sync({ alter: true });
                yield Equivalencia_1.default.sync({ alter: true });
                yield Equivalencia_computacion_ti_1.default.sync({ alter: true });
                yield Equivalencia_ti_computacion_1.default.sync({ alter: true });
                yield MallaCurricularComputacion_1.default.sync({ alter: true });
                yield MallaCurricularTI_1.default.sync({ alter: true });
                yield HistorialAcademico_1.default.sync({ alter: true });
                console.log("Connect");
            }
            catch (error) {
                console.log("Unable to connect: ", error);
            }
        });
    }
}
exports.Server = Server;
