// Tarea: Realizar dos ejercicios de ciclos en javascript por integrante del grupo

// Ejercicios de Jerónimo Alvarez Tablado

/*
    1- Genere una lista de N° enteros, visualizar la suma de los números pares de la lista, 
    cuantos números pares existen y cuál es el promedio de los números impares.
*/

const lista = [];
for (let i = 0; i < 10; i++) {
    lista.push(Math.floor(Math.random() * 101));
}
console.log(lista);

let numParSum = 0;
let numParCont = 0;
let numImpProm = 0;
let numeImpCont = 0;
lista.forEach(item => {
    if (item % 2 == 0) {
        numParSum += item;
        numParCont++;
    } else {
        numImpProm += item;
        numeImpCont++;
    }
});

console.log("La suma de los numeros pares es: ", numParSum)
console.log("Existe numero pares = ", numParCont)
console.log("El promedio de los numeros impares es: ", numImpProm/numeImpCont)

/*
    2 - Suponga que se tiene un conjunto de calificaciones de un grupo de 10 alumnos. 
    Realizar un algoritmo para calcular la calificacion promedio y la calificacion mas baja de todo el grupo.
*/

const list = [10,2,7,4,5,3,3,7,4,8]

let prom = 0;
let cont = 0;
let calLow = 10;
list.forEach(item => {
    prom += item;
    cont++;
    if (item < calLow) {
        calLow = item;
    }
});

console.log('El promedio es: ', prom/cont);
console.log('La calificacion mas baja es: ', calLow)


// Ejercicios de Enzo Jesus Cruzate

/*
    1- Cree un programa en donde haya una lista de 5 numero, y calcule la cantidad de ceros, 
    la media de los números positivos y la media de los números negativos en la lista.
*/

const lista = []
let cantCeros = 0;
let sumPositivos = 0;
let cantPositivos = 0;
let sumNegativos = 0;
let cantNegativos = 0;

for (let i=0; i<5;i++){
    lista.push((Math.floor(Math.random()*201)-100));
}

for (let i=0; i<lista.length;i++){
    if(lista[i] === 0){
        cantCeros++;
    }else if (lista[i]>0){
        sumPositivos += lista[i];
        cantPositivos++;
    }else{
        sumNegativos += lista[i];
        cantNegativos++;
    }
}

let mediaPositivos = sumPositivos/cantPositivos;
let mediaNegativos = sumNegativos/cantNegativos;

console.log("La cantidad de ceros es: ",cantCeros)
console.log("La media de los números positivos es: ",mediaPositivos);
console.log("La media de los números negativos es: ",mediaNegativos);


/*
    2- Genere una lista de N° enteros, visualizar la suma de los números pares de la lista
    cuantos números pares existen y cual es el promedio de los números impares.
*/

const lista = []
let sumPares = 0;
let cantPares = 0;
let cantImpares = 0;
let sumImpares = 0;

for (let i=0;i<20;i++){
    lista.push(Math.floor(Math.random()*100)+1);
}

for (let i=0;i<lista.length;i++){
    if(lista[i] % 2 == 0){
        sumPares += lista[i];
        cantPares++;
    }else{
        sumImpares += lista[i];
        cantImpares++;
    }
}

let promImpares = sumImpares/cantImpares;

console.log("La cantidad de números pares es: ",cantPares);
console.log("La suma de los números pares es: ",sumPares);
console.log("La cantidad de los números impares es: ",cantImpares)
console.log("El promedio de los números impares es: ",promImpares)

// Ejercicios de Facundo Tomas Flores

/*
   1 - Diseñar un programa que en base a un numero aleatorio entre 0 y 2023, nos
    devuelva por consola si es un año bisiesto o no, reperir esta accion 10 veces. 
*/

function Bisiesto(anioB){
    if ((anioB % 4 === 0 && anioB % 100 !== 0 || anioB % 400 === 0)){
        return true    
    }
     else {
        return false
     }
}

for (i = 0; i < 10; i++) {
    var anioB = Math.floor(Math.random() * 2024); 
    if (Bisiesto(anioB)) {
        console.log("El año"+anioB+ " es un año bisiesto.");
    } else {
        console.log("El año"+anioB+ " no es un año bisiesto.");
    }

}

/*
    2 - Suponga que se tiene un conjunto de calificaciones de un grupo de 10 alumnos. 
    Realizar un algoritmo para calcular la calificacion promedio y la calificacion mas baja de todo el grupo.
*/

const calificacionesA = [];

for (let i = 0; i < 10; i++) {
    
    calificacionesA.push(Math.floor(Math.random()*11));
    
}
console.log(calificacionesA)

let sumCalificaciones = 0;
let notaMenor = 10;

calificacionesA.forEach(element => {
    sumCalificaciones += element;
    if (element < notaMenor) {
        notaMenor = element;
    }
});

console.log("El promedio total es: ",sumCalificaciones / calificacionesA.length);
console.log("La nota menor es: ",notaMenor);