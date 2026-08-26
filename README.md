## PARTE 5 – BASE DE DATOS
## Paso 5: Datos del sistema
Respondan:
¿Qué información debe guardarse?

Usuarios: ID usuarios, Nombre, Correo electrónico, Contraseña, Información de contacto, Rol de usuario.
Hoteles: ID hotel, Nombre, Ubicación, Descripción, Servicios ofrecidos, Información de contacto.
Habitaciones: ID habitación, hotel al que pertenece,Tipo de habitación, precio, Capacidad, Estado de disponibilidad.
Reservas: ID de la reserva, Usuario, Hotel, Habitación, Fecha de entrada, Fecha de salida, Estado de la reserva, Fecha de creación.
Reseñas: Usuario, Hotel, Calificación, Comentario, Fecha de publicación.
Notificaciones: Usuario destinatario, tipo de notificación, mensaje, fecha, estado de envío.


¿Qué datos son críticos?

Reservas porque representan las operaciones relacionadas con los usuarios.
Disponibilidad porque debe mantenerse actualizada para evitar reservar una habitación que  ya está reservada.
Información de usuario porque permite identificar y autenticar a los clientes.
información de hoteles y habitaciones porque es necesario para hacer las reservas.


¿Qué pasaría si se pierden?
Ejemplos:
Usuarios: Si se pierde esta información, los usuarios podrían perder sus cuentas y no podrían iniciar sesión o consultar sus reservas.
Hoteles: Si se pierde esta información, los hoteles podrían dejar de aparecer correctamente en la plataforma y los usuarios no podrían consultar sus datos.
Reservas: si se pierde esta información, se podría perder reservas realizadas y los hoteles no tendrían un registro confiable de sus huéspedes. 
Disponibilidad: Si se pierde esta información, el sistema podrá mostrar habitaciones como disponibles cuando realmente están ocupadas, provocando reservas duplicadas.
Reseñas: Si se pierde esta información, desaparecen las calificaciones y comentarios realizados por los usuarios. 
Pregunta clave:
¿Todos los servicios usan la misma base de datos o cada uno tiene la suya?
como estamos utilizando una arquitectura de microservicios lo más coherente es que cada servicio tenga su propia base de datos o de almacenamiento independiente.
Esto permite que los servicios sean independientes y evita que todos dependan directamente de una única base de datos.



PARTE 6 – USUARIOS Y ROLES
Paso 6: Identificar usuarios
¿Quién usará el sistema?
Cliente/Viajero
Administrador del hotel
Administrador del sistema 
Agencia de viajes/ empresa
Pregunta clave:
¿Todos pueden hacer lo mismo?
NO, cada usuario tendrá permisos diferentes de acuerdo a su rol por ejemplo:

Cliente: Busca hoteles, Consulta disponibilidad,  reservas, Cancelar reservas, Dejar reseñas.
Administrador del hotel: Administrar el hotel, administrar habitaciones, Consultar reservas del hotel.
Administrador del sistema: administrar usuarios, Administrar roles, Supervisar plataforma.
Agencia/Empresa: Buscar hoteles, Consultar disponibilidad, Gestionar reservas.

