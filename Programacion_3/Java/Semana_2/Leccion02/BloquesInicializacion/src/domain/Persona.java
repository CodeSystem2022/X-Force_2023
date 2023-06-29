package domain;

public class Person {
    private final int idPerson;
    private static int contadorPerson;
    
    static{ //Bloque de inicialización estático
        System.out.println("Ejecución bloque estático");
        ++Person.contadorPerson;
    }
    
    { //Bloque de inicialización NO estático o contexto dinámico
        System.out.println("Ejecución del bloque NO estático");
        this.idPerson = Person.contadorPerson++; //Incrementa el atributo
    }
    
    //Los bloques de inicialización se ejecutan antes del constructor
    
    public Person(){
        System.out.println("Esta es la ejecución del constructor");
    }
    
   public int getPerson (){
       return this.idPerson;
   }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPerson + '}';
    }
   
   
}
