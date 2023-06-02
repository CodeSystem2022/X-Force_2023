
package test;

import domain.Persona;

public class TestForEach {
    public static void main(String[] args) {
        int edades[] = {5, 6, 7, 8};//sintaxis resumida
        for (int edad:edades) { //sintaxis del ForEach   
            System.out.println("edad = " + edad);    
        }
        Persona personas[] = {new Persona("Juan"), new Persona("Carla"), new Persona("Fede")};  
        
        
        //ForEach
        for(Persona persona: personas){
            System.out.println("persona = " + persona);
        }
    }
}
