import psycopg2

def establecer_conexion():
    conn = psycopg2.connect(
        user="postgres",
        password="1234",
        host="localhost",
        port=5432,
        database="PythonProject"
    )
    return conn