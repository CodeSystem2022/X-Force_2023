//let persona3 = new Persona('Carla', 'Ponca'); // Esto no se debe hacer: Persona is not definid

class Persona { //Clase Padre
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    
    set apellido(apellido){
        return this._apellido;
    }

    nombreCompleto(){
        return this._nombre+' '+this._apellido;
    }

    toString(){
        //Devuelve un string
        return this.nombreCompleto();
    }
}

class Empleado extends Persona { //Clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento
    }
    
}

let persona1 = new Persona('Martin', 'Perez');
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre)
//console.log(persona1);
let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2.nombre);
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre);
//console.log(persona2);

let empleado1  = new Empleado('Maria', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Object.prototype.toString

console.log(empleado1.toString());
console.log(persona1.toString());