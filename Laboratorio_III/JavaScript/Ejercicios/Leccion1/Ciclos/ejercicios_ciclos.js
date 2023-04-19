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