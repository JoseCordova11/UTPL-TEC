import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Estudiante from "../models/estudiante";
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const newUser = async (req: Request, res: Response) => {
    const { idEstudiante, nombre, apellido, email, password, } = req.body;
    try {
        const existingUser = await Estudiante.findOne({ where: { email: email } });
        if (existingUser) {
            return res.status(400).json({ message: "Usuario ya registrado" });
        }
        const hashedPass = await bcrypt.hash(password, 10);
        await Estudiante.create({
            idEstudiante: idEstudiante,
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: hashedPass,
        });
        res.json({
            msg: "Usuario creado exitosamente"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Ocurrió un error" });
    }
};

export const login = async (req: Request, res: Response) => {
    const { CorreoElectronico, Contraseña } = req.body;
    try {
        const user: any = await Estudiante.findOne({ where: { email: CorreoElectronico } });
        if (!user) {
            return res.status(400).json({ msg: "Usuario no registrado" });
        }
        const passwordValid = await bcrypt.compare(Contraseña, user.password);
        if (!passwordValid) {
            return res.status(400).json({ msg: "Contraseña incorrecta" });
        }
        const token = jwt.sign({ estudianteID: user.idEstudiante, CorreoElectronico: CorreoElectronico }, process.env.SECRET_KEY || '123');
        res.json(token);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ocurrió un error al intentar iniciar sesión" });
    }
};




