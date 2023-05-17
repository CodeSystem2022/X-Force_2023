// while
let cont = 0;
while (cont < 3) {
    console.log(cont);
    cont++;
}
console.log("Fin del ciclo while");

// do while
let contador = 0;
do { // Se ejecuta por lo menos una vez
    console.log(contador);
    contador++;
} while (contador < 3);
console.log("Fin del ciclo do while");

// for
for(let contando = 0; contando < 3; contando++) {
    console.log(contando);
}
console.log("Fin del ciclo for");

// Palabra reservada break
for(let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
        break;
    }
}
console.log("Termina el ciclo al encontrar el primer número par")

// La palabra continue
for(i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
        continue; // Va a la siguiente iteración 
    }
    console.log(i);
    break;
}
console.log("Termina el ciclo")

// Etiquetas Labels (No son recomendables)
inicio:
for(i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
        break inicio; // Va a la siguiente iteración 
    }
    console.log(i);
}
console.log("Termina el ciclo")