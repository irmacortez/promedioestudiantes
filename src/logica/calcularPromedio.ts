export const calcularPromedio = (notas: number[]): number =>
  notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

