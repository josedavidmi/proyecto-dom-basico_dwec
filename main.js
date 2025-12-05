// Archivo principal que importa los módulos

console.log(" Cargando módulos...");

// Importar los módulos que harán los grupos
import { cambiarColor } from './modulos/color.js';
import { cambiarTexto } from './modulos/texto.js';
import { cambiarTamano } from './modulos/tamaño.js';

console.log(" Módulos cargados correctamente");

// Obtener la caja del DOM
const miCaja = document.getElementById('miCaja');

// Mostrar información en consola
console.log(" Caja encontrada:", miCaja);
console.log(" Texto actual:", miCaja.textContent);
console.log(" Color actual:", miCaja.style.backgroundColor);

// Exportar la caja para que los módulos la usen
export { miCaja };