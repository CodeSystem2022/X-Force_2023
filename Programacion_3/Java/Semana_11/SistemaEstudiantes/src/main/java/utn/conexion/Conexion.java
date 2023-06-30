package UTN.conexion;

import java.sql.Connection;
import java.sql.DriverManager;


public class Conexion {
    public static Connection getConnection(){
        Connection conexion = null;
        var baseDatos = "estudiantes2022";
        var url = "jdbc:mysql://localhost:3306/"+baseDatos;
        var usuario = "root";
        var password = "admin";
        Class.forName("com.mysql.cj.jdbc.Driver");
        conexion = DriverManager.getConnection(url, usuario, password);
    }
}

