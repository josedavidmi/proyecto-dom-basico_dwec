// Grupo 1: Cambiar el color de la caja
// Archivo: modulos/color.js

console.log(" Módulo de color cargado");

// Importar la caja desde main.js
import { miCaja } from '../main.js';

// Lista de colores disponibles
const colores = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'lightpink'];

// Variable para llevar la cuenta
let indiceColor = 0;

// Función para cambiar el color
export function cambiarColor() {
    console.log(" Cambiando color...");
    
    // Cambiar al siguiente color
    indiceColor = (indiceColor + 1) % colores.length;
    const nuevoColor = colores[indiceColor];
    
    // Cambiar el color en el DOM
    miCaja.style.backgroundColor = nuevoColor;
    
    console.log(" Nuevo color:", nuevoColor);
    
    // Mostrar mensaje en la caja
    miCaja.textContent = `Color: ${nuevoColor}`;
    
    // Cambiar el color del texto según el fondo
    if (nuevoColor === 'lightyellow' || nuevoColor === 'lightpink') {
        miCaja.style.color = 'black';
    } else {
        miCaja.style.color = 'white';
    }
}

// Configurar el botón cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log(" Configurando botón de color...");
    
    const botonColor = document.getElementById('btnColor');
    
    if (botonColor) {
        botonColor.addEventListener('click', cambiarColor);
        console.log(" Botón de color configurado");
    } else {
        console.log(" No se encontró el botón de color");
    }
});