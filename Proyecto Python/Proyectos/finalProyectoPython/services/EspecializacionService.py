from database.connection import establecer_conexion
from entities.Especialidades import Especialidades
from entities.Mentorias import Mentorias


class SpecializationServiceImpl:

    @classmethod
    def getIdSpecializationByName(cls, name):
        name = name.lower()
        query = "SELECT * FROM public.especializacion WHERE nombreesp = %s"
        values = (name,)
        conn = establecer_conexion()
        cursor = conn.cursor()
        cursor.execute(query, values)
        record = cursor.fetchone()
        cursor.close()
        conn.close()
        if record is None:
            return record

        else:
            return record[0]

    @classmethod
    def addSpecialization(cls, nombreesp, idmentoria):
        nombreesp = nombreesp.lower()
        especialidades = Especialidades(nombreesp, idmentoria)
        conn = establecer_conexion()
        cursor = conn.cursor()
        query = "INSERT INTO public.especializacion (nombreesp, idmentoria) VALUES (%s, %s)"
        values = (especialidades.get_nombre(), especialidades.get_idmen())
        cursor.execute(query, values)
        conn.commit()
        cursor.close()
        conn.close()
        return especialidades.get_idmen()
        #print(especialidades.get_nombre(), especialidades.get_idmen())
        
    @classmethod
    def addMentoria(cls, nombreMentoria):
        nuevaMentoria = Mentorias(nombreMentoria)
        conn = establecer_conexion()
        cursor = conn.cursor()
        query = "INSERT INTO public.mentorias (nombre) VALUES (%s) RETURNING (ids, nombre)"
        values = (nuevaMentoria.get_nombre(),)
        cursor.execute(query, values)
        guardado = cursor.fetchone()[0]
        conn.commit()
        cursor.close()
        conn.close()
        return guardado

    @classmethod
    def refreshMentoria(cls):
        conn = establecer_conexion()
        cursor = conn.cursor()
        query = "SELECT ids FROM mentorias ORDER BY ids DESC LIMIT 1;"
        conn = establecer_conexion()
        cursor = conn.cursor()
        cursor.execute(query,)
        record = cursor.fetchone()
        cursor.close()
        conn.close()
        idmentoria = record[0]
        return idmentoria
