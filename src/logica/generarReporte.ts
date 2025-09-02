import { calcularPromedio } from "./calcularPromedio";
import { evaluarEstado } from "./evaluarEstado";

export const generarReporte = (
  estudiantes: { nombre: string; notas: number[] }[]
) =>
  estudiantes.map((estudiante) => {
    const promedio = calcularPromedio(estudiante.notas);
    const estado = evaluarEstado(promedio);
    return {
      nombre: estudiante.nombre,
      promedio: promedio.toFixed(2),
      estado,
    };
  });

