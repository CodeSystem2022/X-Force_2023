class Especialidades:
    def __init__ (self, nombre, idmen):
        self._nombre = nombre
        self._idmen = idmen
        
    def get_nombre (self):
        return (self._nombre)
    
    def get_idmen (self):
        return (self._idmen)
    
    def set_nombre (self, nombre):
        self._nombre = nombre
    
    def set_idmen (self, idmen):
        self._idmen = idmen

        
    def toString (self):
        return ("Nombre: "+self._nombre+"\n Idmen: "+self._idmen)