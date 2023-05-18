# Exepciones
from NumerosIgualesException import NumerosIgualesException

resultado = None

try: # Utilizo primero las clases hijas y si no utilizop la padre Exception para que no termine abruptamente
    a = int(input("Digite el primer numero: ")) # las variables dentro del try van a ser solo con alcance dentro del try execption
    b = int(input("Digite el segundo numero: "))
    if a == b: # Sale del try antes de cambiar la var resultado y va directo a finally
        raise NumerosIgualesException('Son numero iguales') # raise permite lanzar o arrojar una excepcion
    resultado = a / b
except TypeError as e:
    print(f'TypeError - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e: # ZeroDivisionError
    print(f'Exception - Ocurrió un error: {type(e)}')
else: # Se ejecuta en caso de que no se haya lanzado ninguna exception
    print("Ninguna excepción")
finally: # Siempre se va a ejecutar
    print("Ejecución de este bloque finally")

print(f'El resultado es: {resultado}')
print('Seguimos...')