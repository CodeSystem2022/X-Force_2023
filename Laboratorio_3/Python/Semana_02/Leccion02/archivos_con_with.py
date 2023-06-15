from ManejoArchivos import FileManagement

# Manejo de contecto with: sintaxis simplificada, abre y cierra el archivo
#with open('prueba.txt', 'r', encoding='utf8') as archivo:
   # print(archivo.read())
# no hace falta el try, ni el finally
# en el contexto de with lo que se ejecuta de manera automática
# Utiliza diferentes métodos: __enter__ este es el que abre
# Ahora el siguiente método es el que cierra __exit__

with FileManagement('prueba.txt') as file:
    print(file.read())
