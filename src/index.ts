import Cookies from 'js-cookie'

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

enum EstadoTarea {"Pendiente", "En proceso", "Terminado"};

let estadoPendiente = EstadoTarea["En proceso"]; //Devolverá su clave (en este caso un 1, al estar en la segnda posicion del enum)

enum EstadoTarea2 {"Pendiente" = "P", "En proceso" = "E", "Terminado" = "T"};

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
let tarea4:Tarea = {nombre:"Tarea1", prioridad:2, estado:EstadoTarea2.Terminado};

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

console.log(tarea4.estado == "E" ? `La tarea esta en proceso` : `No esta en proceso`);

// IF-ELSE

// if (tarea4.estado == "P") {

// } else {

// }

// SWITCH
switch (tarea4.estado) {
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
    let numero1:number = 1;
    console.log(numero1.toString());
} catch (error) {
    console.log("Se ha producido un error", error)
}

/**
 * Estructura de repetición - Bucles : 
 */

let tarea3 : Tarea = {estado: EstadoTarea2.Terminado, nombre: "Tarea 2", prioridad: 0}
let listadoTareas: Tarea[] = [tarea4,tarea3]

//FOREACH
listadoTareas.forEach( 
    (elemento,indice,listadoTareas) => {
    console.log(`${elemento.nombre} - ${indice} - ${listadoTareas}`)
});

/** 
 * FOR
 * Cuando trabajamos con tipos de datos no funciona
 * for (const tarea: Tarea in listadoTareas){}
 */

// FOR CLÁSICO

for (let index = 0; index < listadoTareas.length ; index++){
    let elemento = listadoTareas[index];
};

//while() {

//};

//do {

//} while ();

//Funciones con parámeros por defecto

function saludarDefault (nombre:string = "Jose"){
    console.log(`Hola ${nombre}, qué tal estas?`);
}
saludarDefault();
saludarDefault("Juan");


//Funciones con parámeros opcionales

function saludarOpcional (nombre?:string){
    let nombreParam = nombre;
    if(nombreParam == undefined){
        nombreParam = "Nombre Defecto";
    }
    console.log(`Hola ${nombreParam}, qué tal estas?`);

}

saludarOpcional();

// Funciones con parámetros de varios tipos
function variosTipos (a: string | number){
    if (typeof(a) == "string"){
        console.log("a es un string");
    } else{
        console.log("a es un number");
    }
}
variosTipos(1);

// Función con retorno: return
function suma (a:number,b:number): number{
    return a+b;
}

// Podemos almacenar directamente el valor devuelto de la función en una variable
var resultadoSuma:number = suma(1,2);

console.log(resultadoSuma);
console.log(suma(1,2));


// Funciones anónimas: no se especifica un nombre.
/**
 * Suma dos valores
 * @param valor1 primer valor
 * @param valor2 segundo valor
 * @returns devuelve la suma de valor1 y valor2
 */
const funcRestar = function (valor1:number, valor2:number): number {
    return valor1 - valor2;
}

/**
 * Funciones, rest parameters (parámetros rest)
 * Permite definir funciones que tomen un número indeterminado de argumentos
 */
function multiParam (...nombres: string[]):void{
    nombres.forEach((nombre)  => {
        console.log(nombre);
    })
}
// Llamada a función multiparámetros
multiParam("Alex","Martin");

// A las funciones rest también se le puede pasar una lista de elementos
let listaNombres:string[] = ["Leandro","Francisco"];
multiParam(...listaNombres);

let farrow = (tarea:Tarea,indice:number) => {console.log(`${indice} - ${tarea.nombre}`)}
listadoTareas.forEach(farrow);
listadoTareas.forEach((tarea:Tarea) => {console.log (`${tarea.nombre}`)});
listadoTareas.forEach(function (tarea:Tarea){console.log(`${tarea.nombre}`)})

// CALLBACK

let fsuma = function suma(a:number, b:number){
    return a+b;
}

let fresta = function resta(a:number,b:number){
    return a-b;
}
// En este ejemplo estamos definiendo que la función opera espera recibir como parámetro una función CallBack
// Concretamente, estamos diciendo que la función como entrada tiene que tener dos parámetros y devolver un número
// Cuando se llama a dicha función CallBack desde la función principal se le pasan dichos parámetros y se vuelve a operar con el resultado

function opera(x:number,y:number,funcion:(a:number,b:number)=> number){
    return funcion(x,y);
}

opera(2,3,fsuma);
opera(2,3,fresta);

console.log("=================================================================");

// EJERCICIO 2
function ejercicio2(type: String = "SessionStorage", key: string, data: Tarea[]) {
    try {
        if (type.toLowerCase() == "session" || type == "SessionStorage") {
            sessionStorage.setItem(key, JSON.stringify(data))
        } else if (type.toLowerCase() == "local") {
            localStorage.setItem(key, JSON.stringify(data));
        }
    } catch (error) {
        console.log("ERROR: No esta definido el SessionStorage");
    };
};

// EJERCICIO 3
let tarea1: Tarea = { nombre: "TAREA1", prioridad: 1, estado: EstadoTarea2.Terminado };
let tarea2: Tarea = { nombre: "TAREA2", prioridad: 2, estado: EstadoTarea2.Pendiente };

let arrayTareas: Tarea[] = [tarea1, tarea2];

ejercicio2("session", "tarea1", arrayTareas);
ejercicio2("local", "tarea2", arrayTareas);

// EJERCICIO 4
function ejercicio4(type: String = "session", key: string) {
    let datos;

    try {
        if (type == "session") {
            datos = sessionStorage.getItem(key);
            console.log("@ == Datos recuperados de sessionStorage == @");
            console.log(datos)
        } else if (type == "local") {
            datos = localStorage.getItem(key);
            console.log("@ == Datos recuperados de localStorage == @");
            console.log(datos)
        }
    } catch (error) {
        console.log("ERROR: No esta definido el SessionStorage");
    };
};
    
// EJERCICIO 5
ejercicio4("session", "tarea1");
ejercicio4("local", "tarea2");

// EJERCICIO 6
function ejercicio6(type:string = "session", key:string) {
    try {
        if (type.match("session")) {
            sessionStorage.removeItem(key);
            console.log("Datos eliminados de sessionStorage");
        } else if (type.match("local")) {
            localStorage.removeItem(key);
            console.log("Datos eliminados de localStorage");
        };
    } catch (error) {
        console.log("ERROR: No esta definido el SessionStorage");
    };
};

ejercicio6("session","tarea1");
ejercicio6("local","tarea2");

// EJERCICIO 7
Cookies.set('Nombre', 'Pedro', {expires:7,path:"/",sameSite:'Strict',secure:false})
Cookies.set('Apellido', 'Blanco', {expires:2,path:"/",sameSite:'Strict',secure:false})
Cookies.set('Email', 'pblavar1810@iescarrillo.es', {expires:4,path:"/",sameSite:'Strict',secure:false})

Cookies.get('Nombre')
Cookies.get('Apellido')
Cookies.get('Email')

Cookies.remove("Nombre");
Cookies.remove("Apellido");
Cookies.remove("Email");