// Grupo 3: Cambiar el tamaño de la caja
// Archivo: modulos/tamaño.js

console.log(" Módulo de tamaño cargado");

// Importar la caja desde main.js
import { miCaja } from '../main.js';

// Tamaños posibles (ancho x alto)
const tamanos = [
    { ancho: '200px', alto: '200px' },
    { ancho: '250px', alto: '150px' },
    { ancho: '150px', alto: '250px' },
    { ancho: '300px', alto: '100px' },
    { ancho: '100px', alto: '300px' }
];

// Variable para llevar la cuenta
let indiceTamano = 0;

// Función para cambiar el tamaño
export function cambiarTamano() {
    console.log(" Cambiando tamaño...");
    
    // Cambiar al siguiente tamaño
    indiceTamano = (indiceTamano + 1) % tamanos.length;
    const nuevoTamano = tamanos[indiceTamano];
    
    // Cambiar el tamaño en el DOM
    miCaja.style.width = nuevoTamano.ancho;
    miCaja.style.height = nuevoTamano.alto;
    
    console.log(" Nuevo tamaño:", nuevoTamano);
    
    // Mostrar el tamaño actual en la caja
    miCaja.textContent = `Tamaño: ${nuevoTamano.ancho} x ${nuevoTamano.alto}`;
}

// Configurar el botón cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log(" Configurando botón de tamaño...");
    
    const botonTamano = document.getElementById('btnTamano');
    
    if (botonTamano) {
        botonTamano.addEventListener('click', cambiarTamano);
        console.log(" Botón de tamaño configurado");
    } else {
        console.log(" No se encontró el botón de tamaño");
    }
});