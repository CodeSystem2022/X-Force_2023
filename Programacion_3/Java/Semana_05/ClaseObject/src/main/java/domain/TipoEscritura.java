/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package domain;


public enum TipoEscritura {
    CLASICO ("Escritura a mano"),
    MODERNO ("Escritura digital");
    private final String descripcion;
    
    private TipoEscritura (String descripcion){//Constructor
        this.descripcion = descripcion;
    }
    //Metodo get
    public String getdescripcion (){
        return this.descripcion;
    }
    
}
