Api para ser consumido por una app de reserva de horas. Hecho en Node JS, con framework Express, haciendo uso de Sequelize como herramienta ORM para manipulación de base de dato en PostgreSQL.

# Version NodeJs

Este proyecto fue hecho con la versión 8.16.0 de Nodejs.

## Instrucciones de Instalación

## Crear Base de Dato en PostgreSQL

Con el usuario por defecto de postgres, el cual tiene por nombre  "postgres" crear una base de dato llamado "db_prueba_mapcity".

Luego ir al directorio "sql" que se encuentra en la raíz del proyecto, abrir el archivo "db.sql" copiar las sentencias y ejecutarlas en algún manejador de posrgrest. Con esto se crearía la tabla "meetings" con algunos de datos de prueba.

Además para que el api tenga acceso a la base de dato es necesario que la contraseña de acceso del usuario postgres sea "123456", de lo contraria se debe cambiar esta configuración que se encuentra en el archivo "database.js" el está ubicado en el directorio "src/database".

## Ejecutar Api

Dentro del directorio del proyecto, ejecutar los siguientes comandos:

instalar las dependencias del proyecto

npm install

Para ejecutar el proyecto

npm run dev

Cabe destacar que el api se levantará por defecto en el puerto 3000, para cambiar esta configuración es necesario acceder al archivo "index.js" que se encuentra en el directorio "src".