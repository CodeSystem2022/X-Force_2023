package test;

import accesodatos.IAccesoDatos;
import accesodatos.ImplementacionMysql;
import accesodatos.ImplementacionOracle;


public class TestInterfaces {
  
    public static void main(String[] args) {
        IAccesoDatos datos = new ImplementacionMysql(); // Creamos variables de tipo interface
        //datos.listar();
        //imprimir(datos);
        datos = new ImplementacionOracle();
        // datos.listar();
        imprimir(datos);
    }

    // Hay que tener en cuenta si agregamos otro método, debe ser estático
    public static void imprimir(IAccesoDatos datos) {
        datos.listar();
    }
}