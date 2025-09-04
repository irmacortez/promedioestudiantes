"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluarEstado = void 0;
const evaluarEstado = (promedio) => {
    if (promedio >= 7)
        return "Promocionado";
    if (promedio >= 4)
        return "Aprobado";
    return "Desaprobado";
};
exports.evaluarEstado = evaluarEstado;
