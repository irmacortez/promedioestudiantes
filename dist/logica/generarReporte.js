"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarReporte = void 0;
const calcularPromedio_1 = require("./calcularPromedio");
const evaluarEstado_1 = require("./evaluarEstado");
const generarReporte = (estudiantes) => estudiantes.map((estudiante) => {
    const promedio = (0, calcularPromedio_1.calcularPromedio)(estudiante.notas);
    const estado = (0, evaluarEstado_1.evaluarEstado)(promedio);
    return {
        nombre: estudiante.nombre,
        promedio: promedio.toFixed(2),
        estado,
    };
});
exports.generarReporte = generarReporte;
