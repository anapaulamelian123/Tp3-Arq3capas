 cómo identifican cada capa en mi codigo:
- app.js : es el archivo principal que arranca el servidor.
- rutas.js: se encarga de lo que el usuario puede pedir 
- logicaNegocio.js : acá va la parte que decide qué hacer con los datos 
- accesoDatos.js : guarda los productos en una lista y los devuelve cuando se piden.Simula la base de datos

Ventajas:
- El código está más ordenado.
- Cada archivo tiene su rol bien definido.
- Si tengo que cambiar algo, no tengo que tocar todo el código, solo la parte que me interesa.
- Es más fácil de mantener, de entender y también de reutilizar si el proyecto crece.
- Si después quiero usar una base de datos real, solo tengo que modificar accesoDatos.js y listo.
