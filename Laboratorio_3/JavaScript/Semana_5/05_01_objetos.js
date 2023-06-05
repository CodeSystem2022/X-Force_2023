let x = 10; //variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos');
//Objeto
let persona = {  //Creamos el objeto
    nombre: 'Carlos', //Le damos los atributos
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma:'es',
    get lang(){
        return this.idioma.toUpperCase();// convierte las minusculas en mayusculas
    },
    set lang(Lang){
        this.idioma = Lang.toUpperCase();
    },
    nombreCompleto: function(){ //metodo o funcion en JavaScript
        return this.nombre+' '+this.apellido
    },
    get nombreEdad(){ //Este es el metodo get
        return this.nombre+', edad: '+this.edad;
    }
    
}

console.log(persona.nombre); //Para mostrar el objeto se tiene que llamar "objeto"."atributo"
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona); //Para mostrar el objeto entero
console.log(persona.nombreCompleto()); 
console.log('Ejecutando con un objeto');

//Otras formas de crear un Objeto
let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan'; //Agregamos propiedades al objeto
persona2.direccion = 'Salada 14';
persona2.telefono = '5492618282821';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto'); 

console.log(persona['apellido']); //Accedemos como si fuera un arreglo
console.log('Usamos el ciclo for in');
//for in y accedemos al objeto si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('Cambiamos y eliminamos un error');
persona.apellido = 'Betancud'; //Cambiamos dinamicamente un valor del objeto
delete persona.apellido; //Eliminamos el error
console.log(persona);

//Distinta formas de imprimir un objeto
//Numero 1: la mas sencilla: concatenar cada valor de cada propiedad
console.log('Distinta formas de imprimir un objeto: forma 1');
console.log(persona.nombre+' '+persona.apellido);

//Numero 2: A traves del ciclo for in
console.log('Distinta formas de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Numero 3: La funcion Object.values()
console.log('Distinta formas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Numero 4: Utilizaremos el metodo JSON.stringify
console.log('Distinta formas de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);



console.log('Comenzamos a utilizar el metodo get');
console.log(persona.nombreEdad); 

console.log('Comenzamos con el metodo get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre, apellido, email){//Constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+apellido;
    }
}
let padre = new Persona3('Leo','Lopez','LeoL@gmai.com');
padre.nombre = 'Luis';// modificamos el nombre del objeto padre
padre.telefono = '20502003';
console.log(padre)

console.log(padre.nombreCompleto());//utilizamos la funcion

let madre = new Persona3('Laura','Rodriguez','LauraR@gmail.com');
console.log(madre);
console.log(madre.nombreCompleto());

//Diferentes formas de crear objetos

//Caso objeto 1
let miObjeto = new Object();// Esta es una opcion formal

//Caso objeto 2
let miObjeto2 = {};// Esta es una opcion es breve y recomendada

//Caso string 1
let miCadema1 = new String('Hola'); //Sintaxix Formal

//Caso string 2 
let miCadema2 = 'hola';//sintaxis simplificada y recomendada

//caso con numeros 1
let miNumero = new Number(1);//Es formal y no recomendable

//Caso con numeros 2
let miNumero2 = 1;// sintaxis abreviada y recomendada

//Caso boolean 1
let miBoolean1 = new Boolean(true);//Formal

//Caso boolean2
let miBoolean2 = false;// sintaxis recomendada

//Caso arreglos 1
let miArreglo1 = new Array();//formal

//Caso arreglos 2
let miArreglo2 = [];//creamos objeto de arreglo vacio

//Caso funcion 1
let miFuncion1 = new function(){};//todo despues de new es considerado objeto

//Caso funcion 2
let miFuncion2 = function(){};//Notacion simplificada y recomendada

//Uso de prototype
Persona3.prototype.telefono = '2399239';
console.log(padre);
madre.telefono = '12012030';
console.log(madre.telefono);

//Uso de call
let persona4 = {
    nombre:'Juan',
    apellido:'Villagran',
    nombreCompleto2: function(titulo,telefono){
      return titulo+' '+this.nombre+' '+this.apellido+' '+telefono;
      //return this.nombre+' '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}
console.log(persona4.nombreCompleto2('Lic.','12093090'));

console.log(persona4.nombreCompleto2.call(persona5,'Ing','818238'));

//metodo Apply
let arreglo = ['Ing.','20202301'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));