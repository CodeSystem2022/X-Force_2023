
package paquete1;

public class ClaseHija2 extends Clase2{
    public ClaseHija2(){
        super();
        this.atributoDefault = "Modificación atributo default";
        System.out.println("Atributo Default = " + this.atributoDefault);
        this.metodoDefault();
    }
}
