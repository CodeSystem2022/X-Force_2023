package test;

public class TestArgumentosVariables {
    public static void main(String[] args) {
       printNumbers(10, 2, 7);
       printNumbers(2, 7);
       variousParameters("Juan", "Perez", 7, 8, 9);
    }
    private static void variousParameters(String name, String lastName, int ...numbers){
        System.out.println("Nombre: "+name+", Apellido: "+lastName );
        printNumbers(numbers);
    }
    
    private static void printNumbers(int ...numbers){
         for (int i = 0; i < numbers.length; i++) {
             System.out.println("Elemetos: "+numbers[i]);
        }
    }
}
