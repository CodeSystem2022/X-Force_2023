from database.connection import establecer_conexion
from entities.Mentor import Mentor


class UsuarioService:

    @classmethod
    def mainFind(cls, especializacion):
        busqueda = cls.findmentores(especializacion)
        cls.createMentorObject(busqueda)
        print("\n A continuación, mostraremos mentorías similares: \n")
        cls.findMaxMentores(busqueda)


    @classmethod
    def findmentores(cls, especializacion):
        especializacion = especializacion.lower()
        query = "SELECT * FROM public.especializacion WHERE nombreesp = %s"
        values = (especializacion,)
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
    def findMaxMentores(cls, idment):
        mentors = []

        query = "SELECT * FROM public.especializacion WHERE ids = %s"
        values = (idment,)
        conn = establecer_conexion()
        cursor = conn.cursor()
        cursor.execute(query, values)
        general = cursor.fetchone()[2]
        cursor.close()
        conn.close()

        idment = general

        query = "SELECT * FROM public.especializacion WHERE idmentoria = %s"
        values = (idment,)
        conn = establecer_conexion()
        cursor = conn.cursor()
        cursor.execute(query, values)
        especializacion_records = cursor.fetchall()
        cursor.close()
        conn.close()

        for especializacion_record in especializacion_records:
            idespe = especializacion_record[0]  # Obtener el idespe de la especialización

            mentor_query = "SELECT * FROM public.mentores WHERE idespe = %s"
            mentor_values = (idespe,)
            conn = establecer_conexion()
            cursor = conn.cursor()
            cursor.execute(mentor_query, mentor_values)
            mentor_records = cursor.fetchall()
            cursor.close()
            conn.close()

            for mentor_record in mentor_records:
                mentor = Mentor(
                    mentor_record[1],  # nombre
                    mentor_record[2],  # apellido
                    especializacion_record[1],  # mentoria (nombre de la especialización)
                    mentor_record[4],  # domicilio
                    mentor_record[6],  # precioHora
                    mentor_record[5]  # diaSemana
                )
                print(mentor)
                mentors.append(mentor)
        return mentors


    @classmethod
    def createMentorObject (cls, idespe):
        mentors = []

        query = "SELECT * FROM public.mentores WHERE idespe = %s"
        values = (idespe,)
        conn = establecer_conexion()
        cursor = conn.cursor()
        cursor.execute(query, values)
        mentor_records = cursor.fetchall()
        cursor.close()
        conn.close()

        for mentor_record in mentor_records:
            mentor_name_query = "SELECT nombreesp FROM public.especializacion WHERE ids = %s"
            mentor_name_values = (mentor_record[3],)  # mentor_record[3] contiene la idespe
            conn = establecer_conexion()
            cursor = conn.cursor()
            cursor.execute(mentor_name_query, mentor_name_values)
            mentor_name_record = cursor.fetchone()
            cursor.close()
            conn.close()

            mentor = Mentor(
                mentor_record[1],  # nombre
                mentor_record[2],  # apellido
                mentor_name_record[0],  # mentoria (nombre de la especialización)
                mentor_record[4],  # domicilio
                mentor_record[6],  # precioHora
                mentor_record[5]  # diaSemana
            )
            print(mentor)
            mentors.append(mentor)


        return mentor_record[3]