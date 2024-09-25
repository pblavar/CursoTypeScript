// Tipos de datos
/**
 * string
 * number - enteros y decimales
 * boolean - true / false
 * null
 * undefined
 */

// Existe también el tipo any pero se supone que esta prohibido

// Tipos de variables
var nombre:string = "Pedro"; // Variable global
let apellido:string = "Blanco"; // Variable local
const PI:number = 3.1415; // Constante (Nunca cambia)

// PI = 2; // Si descomentas esto, veras el error de la constante

// Formas de concatenar un Print
console.log("Hola " + nombre + " " + apellido);
console.log("Hola " + nombre, apellido);
console.log(`Hola ${nombre}`); // Son tildes francesas, no comillas simples

// Declarar varias variables en una línea
let a:string = "QueloQue", b:number = 2, c:boolean = false;

// Array de datos   
let alumnos:string[] = ["Juan", "Jose", "Alex"];

// Array de datos de 3 tipos
let valores: (string | number | boolean)[] = [3, "Hola", 2, true]; //No tiene porque estar ordenado los datos dentro del array según los tipos declarados

// Forma de juntar 2 arrays en un array e incluso agregar
let alumnos1A:string[] = ["Juan", "Pedro", "Fran"];
let alumnos2A:string[] = ["Jose"];
let alumnosTodos:string[] = [...alumnos1A, ...alumnos2A, "Pablo"]
console.log(alumnosTodos);