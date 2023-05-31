class FileManagement:
    def __init__(self, name):
        self.name = name

    def __enter__(self):
        print('Obtenemos el recurso'.center(50, '-'))
        self.name = open(self.name, 'r', encoding='utf8') # Encapsulamos el código  dentro del método
        return self.name

    def __exit__(self, exc_type, exc_val, exc_tb):
        print('cerramos el recurso'.center(50, '-'))
        if self.name:
            self.name.close() # Cerramos el archivo