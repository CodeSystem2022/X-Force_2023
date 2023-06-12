package accesodatos;

public class ImplementacionMySql implements IAccesoDatos{

    @Override
    public void insertar() {
        System.out.println("Insertar");
        
    }

    @Override
    public void listar() {
        System.out.println("Listar");
    }

    @Override
    public void actualizar() {

        System.out.println("Actualizar");
    }

    @Override
    public void elimnar() {
        System.out.println("Eliminar");
    }
    
}
