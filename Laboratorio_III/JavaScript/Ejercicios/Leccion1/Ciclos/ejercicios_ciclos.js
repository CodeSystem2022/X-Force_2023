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
    1- Diseñar un programa que en base a un numero aleatorio entre 0 y 2023, nos devuelva por consola si es un año bisiesto o no, reperir esta accion 10 veces. 
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
    2- Suponga que se tiene un conjunto de calificaciones de un grupo de 10 alumnos. 
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

// Ejercicios de Juan Villagran

/*
    1- Genere una lista de N° enteros, visualizar la suma de los números pares de la lista, cuantos números pares existen y cuál es el promedio de los números impares.
*/

const lista = [];

for (let i = 0; i < 10; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  lista.push(numeroAleatorio);
}
console.log(lista);
let num = 0;
let prom = 0;
let contPar = 0;
let contImpar = 0;
for (let i = 0; i < lista.length; i++){

  if (lista[i] % 2 === 0) {
    num += lista[i];
    contPar++;
    
  } else {
    prom += lista[i];
    contImpar++;
  }
 
}
prom = prom / contImpar;

console.log('La suma de numeros pares es: '+ num);
console.log('La cantida de numeros pares que hay es de: '+contPar);

console.log('El promedio de los numeros impares es: '+prom)

/* 
    2 -  Dada una lista con las horas trabajadas de 5 personas y una variable con la tarifa de pago. Calcular el salario de cada uno, y las sumatoria de todos los salarios
*/ 

let nombres = {
  "Lucía": 10,
  "Pablo": 7,
  "Valentina": 15,
  "Santiago": 9,
  "Mariana": 6
};


console.log('la siguente lista contiene los nombres y las horas trabajadas de los empleados');
console.log(nombres);
console.log('El valor por hora trabajada es de $650');

let nombre;
let precioHora = 650;
for (let nombre in nombres) {
  nombres[nombre] *= precioHora;
}
console.log('El salario de cada uno en pesos es de: ')
console.log(nombres);
let sum = 0;

let valores = Object.values(nombres);
console.log(valores);

let suma = 0;
for (let i = 0; i < valores.length; i++) {
  suma += valores[i];
}
console.log('La suma del total de los sueldos es de: $'+ suma);

// Ejercicios de Cristian Calzolari

/*
    1- El objetivo es recorrer una lista de números y mostrar el cuadrado de cada uno de ellos.
    Este proceso debe continuar hasta que se detecte un número negativo en la lista o hasta que se haya recorrido toda la lista.
*/
    
//Generar lista de números
let listaNum = [2, 3, 5, 8, 1, 10];
//Iicializamos la variable
let i = 0;
//Recorremos la lista y calculamos el cuadrado de cada uno de los n´meros de la lista.
while (i < listaNum.length && listaNum[i] >= 0) {
  let cuadrado = listaNum[i] * listaNum[i];
  console.log(cuadrado);
  i++;
}

/* 
    2- La tarea consiste en generar una lista de 40 números aleatorios y determinar si cada uno de ellos es positivo o negativo. 
    Este proceso debe repetirse hasta que se detecte un 0 en la lista o hasta que se haya recorrido toda la lista.
*/

//  Generar una lista de 40 números aleatorios
let numeros = [];
for (let i = 0; i < 40; i++) {
  numeros.push(Math.floor(Math.random() * 201) - 100);
}
//Inicializamos las variables
let positivos = 0; let negativos = 0; let total = 0;
// Recorrer la lista y determinar si el número es positivo o negativo
for (let numero of numeros) {
  if (numero === 0) {
    console.log("Se detecto un 0");
    break;
  } else if (numero > 0) {
    positivos++;
  } else {
    negativos++;
  }
  total++;
}
//Mostramos el resultado
console.log('La cantidad de números eljidos al azar fueron: ', (total));
console.log('Los números positivos son: ', (positivos));
console.log('Los números negativos son: ', (negativos));