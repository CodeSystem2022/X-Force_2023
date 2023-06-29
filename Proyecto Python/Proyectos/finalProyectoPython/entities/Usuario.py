class Usuario:
    def __init__(self, nombre, apellido):
        self._nombre = nombre
        self._apellido = apellido

    def get_nombre(self):
        return self._nombre

    def get_apellido(self):
        return self._apellido

    def set_nombre(self, nombre):
        self._nombre = nombre

    def set_apellido(self, apellido):
        self._apellido = apellido

    def __str__(self):
        return ("Nombre: " + self._nombre + "\n Apellido: " + self._apellido)