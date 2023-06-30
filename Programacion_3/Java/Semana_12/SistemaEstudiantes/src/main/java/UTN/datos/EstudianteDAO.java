package datos;

import dominio.Estudiante;

import static conexion.Conexion.getConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;


public class EstudianteDAO {
    public List<Estudiante> listar(){
        
        List<Estudiante> estudiantes = new ArrayList<>();
        
        PreparedStatement ps;
        ResultSet rs;

        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2022 ORDER BY estudiantes2022";
        try{
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while(rs.next()){
                var estudiante = new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idestudiante2022"));

            }
        } catch (Exception e){
            System.out.println("Ocurrió un error al seleccionar datos: "+e.getMessage());

        }



    }

    public boolean buscarEstudiantePorId(Estudiante estudiante){
        PreparedStatement ps;
        ResultSet rs;
        Connection sql = "SELECT * FROM estudiantes2022 WHERE idestudiantes2022=?";
        try {
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();
            if (rs.next()) {
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true;
            }
        } catch (Exception e) {
            System.out.println("Ocurrio un error al buscar estudiante: "+e.getMessage());
        }
        finally{
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("ocurrio un error al cerrar conexion"+e.getMessage());
            }
        }
        return false;

    }

    public static void main(String[] args) {
        
        var estudiante1 = new Estudiante(1);
        System.out.println("Estudiantes antes de la busqueda"+estudiante1);
        var encontrado = estudianteDao.buscarEstudiantePorId(estudiante1);
        if(encontrado){
            System.out.println("Estudiante encontrado"+ estudiante1);
        }else{
            System.out.println("No se encontro el estudiante: "+ estudiante1.getIdEstudiante());
        }
    }
}
