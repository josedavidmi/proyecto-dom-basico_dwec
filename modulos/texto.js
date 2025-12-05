// Grupo 2: Cambiar el texto de la caja
// Archivo: modulos/texto.js

console.log("📝 Módulo de texto cargado");

// Importar la caja desde main.js
import { miCaja } from '../main.js';

// Lista de textos posibles
const textos = [
    '¡Hola Mundo!',
    '¿Cómo estás?',
    'Aprendiendo DOM',
    'Módulos JavaScript',
    'Trabajo en equipo'
];

// Variable para llevar la cuenta
let indiceTexto = 0;

// Función para cambiar el texto
export function cambiarTexto() {
    console.log(" Cambiando texto...");
    
    // Cambiar al siguiente texto
    indiceTexto = (indiceTexto + 1) % textos.length;
    const nuevoTexto = textos[indiceTexto];
    
    // Cambiar el texto en el DOM
    miCaja.textContent = nuevoTexto;
    
    console.log(" Nuevo texto:", nuevoTexto);
}

// Configurar el botón cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log(" Configurando botón de texto...");
    
    const botonTexto = document.getElementById('btnTexto');
    
    if (botonTexto) {
        botonTexto.addEventListener('click', cambiarTexto);
        console.log(" Botón de texto configurado");
    } else {
        console.log(" No se encontró el botón de texto");
    }
});