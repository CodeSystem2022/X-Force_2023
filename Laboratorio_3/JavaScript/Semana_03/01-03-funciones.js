miFuncion(8, 4); // Esto se lo conoce como hosting

function miFuncion (a, b){
    //console.log("Sumamos: "+ (a+b))
    return a + b;
}

//Llamamos a la función
miFuncion(4, 5);

let resultado = miFuncion(6, 7);
console.log(resultado);

// Declaramos una función de tipo expresión o anónima
let x = function(a, b){ return a + b}; //necesita cierre con punto y coma
resultado =x(5, 6); //al llamarla se pone la variable y parentesis
console.log(resultado);


//Funciones de tipo self y invoking
(function(a, b){
    console.log('Ejecutando la función: '+(a + b));
})(9, 6);


console.log(typeof miFuncion);
function miFuncionDos (a, b){
    console.log(arguments.length);
}

miFuncionDos (5, 7, 9);

//toString
var miFuncionTexto = miFuncionDos.toString(); //Conviernte la funcion a texto
console.log(miFuncionTexto);

//Funciones flecha
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha (3, 7); // Asignamos el valor a una variable
console.log(resultado)


// Función tipo expresión
let sumar = function(a, b){
    console.log(arguments[0]); //Muestra el parameto de a
    console.log(arguments[1]);
    return a + b + arguments[2];
}
resultado = sumar(2, 4, 6);
console.log(resultado);

//Sumar todos los argumentos
let respuesta = sumarTodo(2, 4, 5, 6);
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; //Arguments es para arreglos
    }
    return suma; 
}

//Tipos Primitivos
let k = 10;
function cambiarValor(a){ //Paso por valor
    a = 20;
}

cambiarValor(k);
console.log(k);

//Paso por referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Lepez'
}
console.log(persona);
function cambiarValorObjeto(p1){
    p1.nombre = 'Ignacio';
    p1.apellido = 'Perez';
}

cambiarValorObjeto(persona);
console.log(persona);
