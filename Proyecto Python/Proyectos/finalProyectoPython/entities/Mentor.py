class Mentor:
    def __init__(self, nombre, apellido, mentoria, domicilio, precioHora, diaSemana):
        self._nombre = nombre
        self._apellido = apellido
        self._mentoria = mentoria
        self._domicilio = domicilio
        self._precioHora = precioHora
        self._diaSemana = diaSemana
        
    def get_nombre(self):
        return self._nombre

    def get_apellido(self):
        return self._apellido

    def get_mentoria(self):
        return self._mentoria

    def get_domicilio(self):
        return self._domicilio

    def get_precioHora(self):
        return self._precioHora

    def get_diaSemana(self):
        return self._diaSemana

    def set_nombre(self, nombre):
        self._nombre = nombre

    def set_apellido(self, apellido):
        self._apellido = apellido

    def set_mentoria(self, mentoria):
        self._mentoria = mentoria

    def set_domicilio(self, domicilio):
        self._domicilio = domicilio

    def set_precioHora(self, precioHora):
        self._precioHora = precioHora

    def set_diaSemana(self, diaSemana):
        self._diaSemana = diaSemana

    def __str__(self):
        return ("Nombre: " + self._nombre + "\n Apellido: " +self._apellido + "\n Mentoría: " + str(self._mentoria)+
                "\n Domicilio: " + self._domicilio + "\n PrecioHora: " + str(self._precioHora) + "\nDiasSemana: " + self._diaSemana)

