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
``
// Array de datos   
let alumnos:string[] = ["Juan", "Jose", "Alex"];

// Array de datos de 3 tipos
let valores: (string | number | boolean)[] = [3, "Hola", 2, true]; //No tiene porque estar ordenado los datos dentro del array según los tipos declarados

// Forma de juntar 2 arrays en un array e incluso agregar
let alumnos1A:string[] = ["Juan", "Pedro", "Fran"];
let alumnos2A:string[] = ["Jose"];
let alumnosTodos:string[] = [...alumnos1A, ...alumnos2A, "Pablo"]
console.log(alumnosTodos);

// declarar Bloques de datos
let misDatos = {
    nombre: "Vargas",
    apellidos: "Blanco",
    edad: 18
};

let configuracion = {
    versionTS: "Es6",
    versionCodigo: "1.0",
    ... misDatos
};

// guardar datos del bloque en una variable
let propiedad1 = configuracion.versionTS;
let propiedad2 = configuracion.nombre;

// Mostrar variables con los datos
console.log(`${propiedad1}, ${propiedad2}`);

enum EstadoTarea {"Pendiete", "En proceso", "Terminado"};

let estadoPendiente = EstadoTarea["En proceso"]; //Devolverá su clave (en este caso un 1, al estar en la segnda posicion del enum)

enum EstadoTarea2 {"Pendiete" = "P", "En proceso" = "E", "Terminado" = "T"};

let estadoPendiente2 = EstadoTarea["En proceso"]; //Devolverá su clave (en este caso un E)

console.log(EstadoTarea["En proceso"]);
console.log(EstadoTarea2["En proceso"]);

// Declarar Interfaces
interface Tarea {
    nombre:string,
    prioridad:number,
    estado:EstadoTarea2
};

// Crear un bloque de datos con la interfaz creada. (Tiene que contener las variables y sus tipos declaradas en el bloque)
let tarea1:Tarea = {nombre:"Tarea1", prioridad:2, estado:EstadoTarea2.Terminado};

// Declarar type (Es muy similar a las interfaces)
type Empleado = {
    nombre:string,
    edad:number,
    sueldo:number
};

let empleado1:Empleado = {nombre:"Jose", edad:18, sueldo: 15000};
console.log(empleado1.edad);

// Declarar un empleado con 2 types
type Administrativo  = {
    cod:string
};

let empleado2: Empleado & Administrativo;
empleado2={edad:18, cod:"123", nombre:"Juan", sueldo:1500}

console.log(empleado2.cod);

// Operador Ternario
// condicion ? verdadero : falso

console.log(tarea1.estado == "E" ? `La tarea esta en proceso` : `No esta en proceso`);

// IF-ELSE

if (tarea1.estado == "P") {

} else {

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