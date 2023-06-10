import psycopg2

conexion = psycopg2.connect( user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s' # Placeholder
            entrada = input('Digite los id_persona a buscar (separados por coma): ')
            llaves_primarias = (tuple(entrada.split(',')),)
            cursor.execute(sentencia, llaves_primarias) # ejecutamos la sentencia
            registros = cursor.fetchall() # recuperamos todos los registros que serán una lista
            for registros in registros:
                print(registros)

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()