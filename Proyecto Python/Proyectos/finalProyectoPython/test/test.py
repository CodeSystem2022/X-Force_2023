from entities.Mentor import Mentor
from services import UsuarioService

mentor0 = Mentor('Santiago', 'Policastro', 'Cocteleria', 'Calle alberdi N° 37', 1200, 'Lunes, Martes')
mentor1 = Mentor('Angel', 'Villoldo', 'Piano', 'Calle Mayo N° 37', 1000, 'Lunes, Martes')
mentor2 = Mentor('Marcos', 'Maidana', 'Boxeo', 'Avenida Siempre Viva', 1500, 'Sabado, Domingo')
mentor3 = Mentor('Manuel', 'Belgrano', 'historia', 'Avenida Belgrano 430', 100, 'Viernes, Miercoles')

#service = EspecializacionService()
#testeo = service.getIdSpecializationByName(mentor1.get_mentoria())
#print(testeo)

#addNew = MentorService.addMentor(mentor0, 3)
#addNew = MentorService.addMentor(mentor1, 1)
#addNew = MentorService.addMentor(mentor2, 5)
#addNew = MentorService.addMentor(mentor3, 0, "Ciencias sociales")

busqueda = UsuarioService.mainFind("cocteleria")

#UsuarioService.findMaxMentores(11)


#-------------------------------------------------------------------
#print(EspecializacionService.getIdSpecializationByName("historia"))