"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularPromedio = void 0;
const calcularPromedio = (notas) => notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
exports.calcularPromedio = calcularPromedio;
