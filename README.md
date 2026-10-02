# TRABAJO PRÁCTICO 03

## DESCRIPCIÓN
Esta es una API construida con Express que administra de forma temporal un catalogo de instrumentos musicales. Permite consultar una bienvenida, listar los instrumentos, crear nuevos instrumentos en memoria mientras el servidor esté activo.
## INSTALACIÓN
primero hay que clonar el repositorio y desde la carpeta raíz, hay que correr npm install eso instala Express y las demás dependencias que figuran en el package.json.
## EJECUCÍON
Para prender el servidor corro npm start Si anduvo bien, en la terminal va a aparecer Servidor disponible en http://localhost:3000 Para apagarlo vuelvo a esa terminal y apreto Ctrl + c.
## ENDPOINTS
 Metodo GET	/ Tira un mensaje de bienvenida, para confirmar que la API está funcionando.
        GET	/api/instrumentos Devuelve todos los instrumentos.
        GET	/api/instrumentos/:id Te devuelve un instrumento puntual, buscándolo por su id.
        POST /api/instrumentos	Crea un instrumento nuevo
#     