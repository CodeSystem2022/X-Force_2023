import java.util.Scanner;
public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true){ // Ciclo infinito
            System.out.println("******* Aplicación Calculadora *******");
            mostrarMenu();

            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                    ejecutarOperación(operacion, entrada);
                } // Fin del if
                else if (operacion == 5) {
                    System.out.println("Final - Hasta pronto...");
                    break; // Rompe el ciclo y sale
                } else {
                    System.out.println("Opción erronea: " + operacion);
                }
                // Imprimimos un salto de línea antes de repetir el menú
                System.out.println();
            } catch (Exception e){ //Fin de try, comienzo de catch
                System.out.println("Ocurrió un error: "+e.getMessage());
                System.out.println();
            } // Fin Catch
         } // Fin while
    } // Fin main
    //Clase 9.8 Factorizamos el código a través del método mostrar Menu
    private static void mostrarMenu(){
        //Clase 9.4 Creamos el menú
        System.out.println("""
                    1. Suma
                    2. Resta
                    3. Muliplicación
                    4. División
                    5. Salir                
                    """);
        System.out.print("Operación a realizar? ");
    }// Fin método mostrar menú

    private static void ejecutarOperación(int operacion, Scanner entrada){
        System.out.print("Digite el valor para el operando1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para el operando2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());
        double resultado;
        switch (operacion) {
            case 1 -> {
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma: " + resultado);
            }
            case 2 -> {
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta: " + resultado);
            }
            case 3 -> {
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicación: " + resultado);
            }
            case 4 -> {
                resultado = operando1 / operando2;
                System.out.println("Resultado de la división: " + resultado);
            }
            default -> System.out.println("Opción erronea" + operacion);
        } //Fin switch
    } // Fin método ejecutarOperacion
}   // Fin clase
