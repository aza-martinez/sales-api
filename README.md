# Dashboard de ventas
Este proyecto es una prueba tecnica para la creación de una API con el concepto de ventas.

#Rutas de API
-  /clients
Obtener clientes
-  /clients/{id}
Obtener cliente por id
-  /users
Obtener usuarios
-  /users/{id}
 Obtener usuario por id
- /sales/team/{id}
Obtener ventas por equipo
-  /sales/users/{id}
Obtener ventas por usuario

#Base de Datos
Dentro del repositorio podremos encontrar un script **SQL** para poder crear la **Base de datos**.

**Carpeta:** sql
**Archivo:** database.sql

Es importante tener la Base de datos ya sea local o algún servicio o servidor de nube.

## Variables de Entorno
El proyecto tiene como dependencia **dotenv** el cual nos ayuda ainterpretar las variables de entorno del proyecto leyendo un archivo llamado **.env**, para saber cuales son las variables de entorno en el repositorio encontrarás un archivo llamado **.env.template**.

    //APP
    PORT=
    
    //DATABASE
    HOST_DATABASE=
    USER_DATABASE=
    PASSWORD_DATABASE=
    NAME_DATABASE=

Es importante tener configuradas las variables entorno anteriores ya que sin ellas el proyecto no funcionará, las variables se pueden configurar en el variables de entorno del servidor o dentro del archivo  **.env**

## Instalación y Ejecución
Para poder ejecutar el proyecto necesitamos ejecutar los siguientes comandos dentro de nuestra linea de comandos ubicados en nuestra carpeta de proyecto.

**Instalar dependencias**
`npm install`

**Ejecución**
`npm run dev`