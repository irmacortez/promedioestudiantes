export const evaluarEstado = (promedio: number): string => {
  if (promedio >= 7) return "Promocionado";
  if (promedio >= 4) return "Aprobado";
  return "Desaprobado";
};

