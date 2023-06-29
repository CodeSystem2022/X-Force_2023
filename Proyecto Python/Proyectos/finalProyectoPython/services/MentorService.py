from database.connection import establecer_conexion
from services.EspecializacionService import EspecializacionService
class MentorService:

    @classmethod
    def addMentor(cls, mentor, idmentoria, nombreMentoria=None):

        if (idmentoria == 0):
            print("mentoria no encontrada")
            EspecializacionService.addMentoria(nombreMentoria)
            idmentoria = EspecializacionService.refreshMentoria()
            print("Nueva mentoria creada: "+nombreMentoria.lower())

        idespe = EspecializacionService.getIdSpecializationByName(mentor.get_mentoria())
    #idespe es una variable, la cual, con el nombre de la mentoría, busca la id, y toma el valor de la id de la
    #   mentoria (si el nombre de la mentoría es cocteleria, y su id es 11, entonces, pasando cocteleria, idespe = 11)

        if idespe is None:
            print("especializacion no encontrada")
            idespe = EspecializacionService.addSpecialization(mentor.get_mentoria(), idmentoria)
            print("Nueva especializacion creada: "+mentor.get_mentoria().lower())

        idespe = EspecializacionService.getIdSpecializationByName(mentor.get_mentoria())
        conn = establecer_conexion()
        cursor = conn.cursor()
        query = "INSERT INTO public.mentores (nombre, apellido, idespe, domicilio, diasdisponibles, preciohora) " \
                "VALUES (%s, %s, %s, %s, %s, %s)"
        values = (mentor.get_nombre(), mentor.get_apellido(), idespe, mentor.get_domicilio(), mentor.get_diaSemana(),
                  mentor.get_precioHora())
        cursor.execute(query, values)
        conn.commit()
        cursor.close()
        conn.close()

        return mentor