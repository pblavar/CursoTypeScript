/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

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
var nombre = "Pedro"; // Variable global
let apellido = "Blanco"; // Variable local
const PI = 3.1415; // Constante (Nunca cambia)
// PI = 2; // Si descomentas esto, veras el error de la constante
// Formas de concatenar un Print
console.log("Hola " + nombre + " " + apellido);
console.log("Hola " + nombre, apellido);
console.log(`Hola ${nombre}`); // Son tildes francesas, no comillas simples
// Declarar varias variables en una línea
let a = "QueloQue", b = 2, c = false;
``;
// Array de datos   
let alumnos = ["Juan", "Jose", "Alex"];
// Array de datos de 3 tipos
let valores = [3, "Hola", 2, true]; //No tiene porque estar ordenado los datos dentro del array según los tipos declarados
// Forma de juntar 2 arrays en un array e incluso agregar
let alumnos1A = ["Juan", "Pedro", "Fran"];
let alumnos2A = ["Jose"];
let alumnosTodos = [...alumnos1A, ...alumnos2A, "Pablo"];
console.log(alumnosTodos);
// declarar Bloques de datos
let misDatos = {
    nombre: "Vargas",
    apellidos: "Blanco",
    edad: 18
};
let configuracion = Object.assign({ versionTS: "Es6", versionCodigo: "1.0" }, misDatos);
// guardar datos del bloque en una variable
let propiedad1 = configuracion.versionTS;
let propiedad2 = configuracion.nombre;
// Mostrar variables con los datos
console.log(`${propiedad1}, ${propiedad2}`);
var EstadoTarea;
(function (EstadoTarea) {
    EstadoTarea[EstadoTarea["Pendiete"] = 0] = "Pendiete";
    EstadoTarea[EstadoTarea["En proceso"] = 1] = "En proceso";
    EstadoTarea[EstadoTarea["Terminado"] = 2] = "Terminado";
})(EstadoTarea || (EstadoTarea = {}));
;
let estadoPendiente = EstadoTarea["En proceso"]; //Devolverá su clave (en este caso un 1, al estar en la segnda posicion del enum)
var EstadoTarea2;
(function (EstadoTarea2) {
    EstadoTarea2["Pendiete"] = "P";
    EstadoTarea2["En proceso"] = "E";
    EstadoTarea2["Terminado"] = "T";
})(EstadoTarea2 || (EstadoTarea2 = {}));
;
let estadoPendiente2 = EstadoTarea["En proceso"]; //Devolverá su clave (en este caso un E)
console.log(EstadoTarea["En proceso"]);
console.log(EstadoTarea2["En proceso"]);
;
// Crear un bloque de datos con la interfaz creada. (Tiene que contener las variables y sus tipos declaradas en el bloque)
let tarea1 = { nombre: "Tarea1", prioridad: 2, estado: EstadoTarea2.Terminado };
let empleado1 = { nombre: "Jose", edad: 18, sueldo: 15000 };
console.log(empleado1.edad);
let empleado2;
empleado2 = { edad: 18, cod: "123", nombre: "Juan", sueldo: 1500 };
console.log(empleado2.cod);
// Operador Ternario
// condicion ? verdadero : falso
console.log(tarea1.estado == "E" ? `La tarea esta en proceso` : `No esta en proceso`);
// IF-ELSE
if (tarea1.estado == "P") {
}
else {
}
// SWITCH
switch (tarea1.estado) {
    case "P":
        console.log("Tarea en pendiente");
        break;
    case "E":
        console.log("Tarea en proceso");
        break;
    case "T":
        console.log("Tarea terminada");
        break;
    default:
        console.log("Tiene otro estado o no tiene");
        break;
}
try {
    let numero1 = 1;
    console.log(numero1.toString());
}
catch (error) {
    console.log("Se ha producido un error", error);
}
/**
 * Estructura de repetición - Bucles :
 */
let tarea2 = { estado: EstadoTarea2.Terminado, nombre: "Tarea 2", prioridad: 0 };
let listadoTareas = [tarea1, tarea2];
//FOREACH
listadoTareas.forEach((elemento, indice, listadoTareas) => {
    console.log(`${elemento.nombre} - ${indice} - ${listadoTareas}`);
});
/**
 * FOR
 * Cuando trabajamos con tipos de datos no funciona
 * for (const tarea: Tarea in listadoTareas){}
 */
// FOR CLÁSICO
for (let index = 0; index < listadoTareas.length; index++) {
    let elemento = listadoTareas[index];
}
;
//while() {
//};
//do {
//} while ();
//Funciones con parámeros por defecto
function saludarDefault(nombre = "Jose") {
    console.log(`Hola ${nombre}, qué tal estas?`);
}
saludarDefault();
saludarDefault("Juan");
//Funciones con parámeros opcionales
function saludarOpcional(nombre) {
    let nombreParam = nombre;
    if (nombreParam == undefined) {
        nombreParam = "Nombre Defecto";
    }
    console.log(`Hola ${nombreParam}, qué tal estas?`);
}
saludarOpcional();
// Funciones con parámetros de varios tipos
function variosTipos(a) {
    if (typeof (a) == "string") {
        console.log("a es un string");
    }
    else {
        console.log("a es un number");
    }
}
variosTipos(1);
// Función con retorno: return
function suma(a, b) {
    return a + b;
}
// Podemos almacenar directamente el valor devuelto de la función en una variable
var resultadoSuma = suma(1, 2);
console.log(resultadoSuma);
console.log(suma(1, 2));
// Funciones anónimas: no se especifica un nombre.
/**
 * Suma dos valores
 * @param valor1 primer valor
 * @param valor2 segundo valor
 * @returns devuelve la suma de valor1 y valor2
 */
const funcRestar = function (valor1, valor2) {
    return valor1 - valor2;
};
/**
 * Funciones, rest parameters (parámetros rest)
 * Permite definir funciones que tomen un número indeterminado de argumentos
 */
function multiParam(...nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
// Llamada a función multiparámetros
multiParam("Alex", "Martin");
// A las funciones rest también se le puede pasar una lista de elementos
let listaNombres = ["Leandro", "Francisco"];
multiParam(...listaNombres);
let farrow = (tarea, indice) => { console.log(`${indice} - ${tarea.nombre}`); };
listadoTareas.forEach(farrow);
listadoTareas.forEach((tarea) => { console.log(`${tarea.nombre}`); });
listadoTareas.forEach(function (tarea) { console.log(`${tarea.nombre}`); });
// CALLBACK
let fsuma = function suma(a, b) {
    return a + b;
};
let fresta = function resta(a, b) {
    return a - b;
};
// En este ejemplo estamos definiendo que la función opera espera recibir como parámetro una función CallBack
// Concretamente, estamos diciendo que la función como entrada tiene que tener dos parámetros y devolver un número
// Cuando se llama a dicha función CallBack desde la función principal se le pasan dichos parámetros y se vuelve a operar con el resultado
function opera(x, y, funcion) {
    return funcion(x, y);
}
opera(2, 3, fsuma);
opera(2, 3, fresta);

/******/ })()
;
//# sourceMappingURL=bundle.js.map