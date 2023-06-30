
-- Comenzamos con CRUD: create(insertar), read(leer), update(actualizar), delete(eliminar)
-- Listar los estudiantes (read)
SELECT * FROM estudiantes2022;
-- Insertar estudiante
INSERT INTO estudiantes2022(nombre, apellido, telefono, email) VALUES ("Pero", "Pica Piedras", "345346456", "pablitoclavounclavito.com");
-- Update (modificar)
UPDATE estudiantes2022 SET nombre="Hola", apellido="Juan Carlos" WHERE idestudiantes2022= 1;
-- Delete(eliminar)
DELETE FROM estudiantes2022 WHERE idestudiantes2022=3;
-- Para modificar el idestudiantes2022 y comience en 1
ALTER TABLE estudiantes2022 AUTO_INCREMENT = 1;
