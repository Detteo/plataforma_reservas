# plataforma_reservas

# PARTE 1 — ENTENDER EL PROBLEMA

# ¿Qué problema resuelve el sistema?
- Conectar viajeros con hoteles que tengan disponibilidad de habitaciones, hacer reservas y comparar precios sin intermediarios
# ¿Quién lo usará?
- Viajeros, agencias de viajes y empresas con viajes de trabajo 
# ¿Qué pasaría si no existiera?
- El proceso de hacer reservas y consultar precios se haría más lento y dependiendo de las respuestas de intermediarios

# PARTE 2 – IDENTIFICAR LOS SERVICIOS

Un sistema distribuido se divide en servicios.

# ¿Qué funciones principales tiene el sistema?
- Usuarios- Registro de usuarios
- Autenticación- gestión de roles y login
- Hoteles- Catalogo de hoteles 
- Disponibilidad- Consulta de disponibilidad
- Reservas- Administración de reservas
- Notificaciones- Confirmación de reservas, recordatorios y ofertas
- Reseñas- Calificación del servicio
# ¿Qué partes pueden trabajar por separado?
- Autenticación
- Hoteles
- Notificaciones
- Reseñas
# ¿Qué procesos son independientes?
- Usuarios
- Hoteles
- Autentificación

# PARTE 3 – ¿CÓMO SE COMUNICAN?

## Paso 3: Conexión entre servicios

Respondan:

- ¿Qué servicio necesita información de otro?

El servicio de Reservas necesita información del servicio de Disponibilidad para saber si existe una habitación disponible antes de realizar una reserva.

También el servicio de Reservas necesita información del servicio de Hoteles para obtener los datos del hotel y de la habitación seleccionada.

- ¿Quién solicita datos?

El servicio que necesita la información es quien realiza la solicitud.

Por ejemplo, Reservas solicita información a Disponibilidad para consultar si una habitación está disponible para las fechas seleccionadas.

- ¿Quién responde?

El servicio al que se realiza la solicitud es quien responde.

Por ejemplo, Disponibilidad responde a Reservas indicando si la habitación está disponible o no.

Ejemplo:

Pedidos → solicita → Inventario

Pagos → confirma → Pedidos

# PARTE 4 – ELEGIR LA ARQUITECTURA

## Paso 4: Tipo de arquitectura

Decidan cuál usarán:

- Cliente–Servidor
- Arquitectura en capas
- Microservicios
- Basados en eventos
- Híbrida

## Preguntas guía:

- ¿Cuántos usuarios tendrá el sistema?

Inicialmente se plantea que la plataforma pueda atender miles de usuarios, con posibilidad de aumentar su capacidad a medida que crezca el número de hoteles y clientes.

- ¿Necesita escalar?

Sí. La plataforma puede experimentar períodos de alta demanda, como vacaciones, fines de semana, temporadas turísticas y fechas especiales.

Por esta razón, debe poder aumentar la capacidad de los servicios que reciban mayor cantidad de solicitudes.

- ¿Es un sistema pequeño o grande?

Inicialmente puede considerarse un sistema de tamaño mediano, pero debe diseñarse con capacidad de crecimiento para soportar una mayor cantidad de hoteles, usuarios y reservas.

Justifiquen su elección:

Elegimos una arquitectura basada en microservicios porque la plataforma de reservas puede dividirse en diferentes servicios independientes, como usuarios, autenticación, hoteles, disponibilidad, reservas, notificaciones y reseñas.

Cada servicio tendrá una responsabilidad específica y podrá comunicarse con los demás cuando sea necesario.

Esta arquitectura también permite que determinados servicios puedan escalarse de manera independiente.

## PARTE 5 – BASE DE DATOS
## Paso 5: Datos del sistema
# Respondan: ¿Qué información debe guardarse?

- Usuarios: ID usuarios, Nombre, Correo electrónico, Contraseña, Información de contacto, Rol de usuario.

- Hoteles: ID hotel, Nombre, Ubicación, Descripción, Servicios ofrecidos, Información de contacto.

- Habitaciones: ID habitación, hotel al que pertenece,Tipo de habitación, precio, Capacidad, Estado de disponibilidad.

- Reservas: ID de la reserva, Usuario, Hotel, Habitación, Fecha de entrada, Fecha de salida, Estado de la reserva, Fecha de creación.

- Reseñas: Usuario, Hotel, Calificación, Comentario, Fecha de publicación.

- Notificaciones: Usuario destinatario, tipo de notificación, mensaje, fecha, estado de envío.


## ¿Qué datos son críticos?

- Reservas porque representan las operaciones relacionadas con los usuarios.
- Disponibilidad porque debe mantenerse actualizada para evitar reservar una habitación que  ya está reservada.
- Información de usuario porque permite identificar y autenticar a los clientes.
- información de hoteles y habitaciones porque es necesario para hacer las reservas.


## ¿Qué pasaría si se pierden?
Ejemplos:

- Usuarios: Si se pierde esta información, los usuarios podrían perder sus cuentas y no podrían iniciar sesión o consultar sus reservas.

- Hoteles: Si se pierde esta información, los hoteles podrían dejar de aparecer correctamente en la plataforma y los usuarios no podrían consultar sus datos.

- Reservas: si se pierde esta información, se podría perder reservas realizadas y los hoteles no tendrían un registro confiable de sus huéspedes. 

- Disponibilidad: Si se pierde esta información, el sistema podrá mostrar habitaciones como disponibles cuando realmente están ocupadas, provocando reservas duplicadas.

- Reseñas: Si se pierde esta información, desaparecen las calificaciones y comentarios realizados por los usuarios. 

## Pregunta clave: ¿Todos los servicios usan la misma base de datos o cada uno tiene la suya?

como estamos utilizando una arquitectura de microservicios lo más coherente es que cada servicio tenga su propia base de datos o de almacenamiento independiente.
Esto permite que los servicios sean independientes y evita que todos dependan directamente de una única base de datos.



## PARTE 6 – USUARIOS Y ROLES
## Paso 6: Identificar usuarios
## ¿Quién usará el sistema?

- Cliente/Viajero

- Administrador del hotel

- Administrador del sistema 

- Agencia de viajes/ empresa

## Pregunta clave:
## ¿Todos pueden hacer lo mismo?
NO, cada usuario tendrá permisos diferentes de acuerdo a su rol por ejemplo:

- Cliente: Busca hoteles, Consulta disponibilidad,  reservas, Cancelar reservas, Dejar reseñas.

- Administrador del hotel: Administrar el hotel, administrar habitaciones, Consultar reservas del hotel.

- Administrador del sistema: administrar usuarios, Administrar roles, Supervisar plataforma.

- Agencia/Empresa: Buscar hoteles, Consultar disponibilidad, Gestionar reservas.

## AVANCE DE IMPLEMENTACIÓN

Además del análisis conceptual anterior, el proyecto ya cuenta con un primer avance de implementación.

### Estructura del repositorio

```
plataforma_reservas/
├── docs/
│   └── Arquitectura/
│       ├── Arquitectura.md          # Diagrama de arquitectura (Mermaid)
│       └── definicion-servicios.md  # Ficha detallada de cada servicio
├── home_hotel/                      # Vista principal (HOME) del sistema
│   ├── Dockerfile
│   ├── index.html
│   ├── script.js
│   └── style.css
└── docker-compose.yml               # Orquestación de los servicios con Docker
```

### Diagrama de arquitectura y definición de servicios

Se formalizó la arquitectura elegida en [`docs/Arquitectura/Arquitectura.md`](docs/Arquitectura/Arquitectura.md), con un diagrama que ilustra el flujo:

Usuario → Vista Principal (HOME, en Docker) → API Gateway → Servicios (Usuarios, Espacios/Hoteles, Reservas) → comunicación asíncrona futura con Pagos y Notificaciones.

También se amplió la definición de cada servicio (responsabilidad principal, información que maneja y comunicación con otros servicios) en [`docs/Arquitectura/definicion-servicios.md`](docs/Arquitectura/definicion-servicios.md), incluyendo los servicios futuros de Pagos y Notificaciones.

### Vista principal (HOME) implementada

Se construyó una primera versión del frontend HotelSys en `home_hotel/`, una landing page estática (HTML + CSS + JS) con las siguientes secciones:

- Inicio: presentación general del sistema.
- Servicios: tarjetas con los servicios del primer avance (Usuarios, Espacios/Hoteles, Reservas) y los servicios futuros (Pagos, Notificaciones).
- Hoteles: contenedor preparado para mostrar los hoteles disponibles apenas el API Gateway y el servicio de Hoteles queden conectados.
- Arquitectura: representación visual del flujo Usuario → HOME → API Gateway → Servicios.
- Equipo: integrantes del proyecto.

El archivo `script.js` ya incluye la lógica para consultar el servicio de hoteles (`obtenerHoteles()`), pintar los resultados en pantalla y mostrar un mensaje cuando el backend todavía no está disponible.

### Contenerización y orquestación

Se agregó un `Dockerfile` (basado en `nginx:alpine`) para servir la vista HOME, y un `docker-compose.yml` en la raíz del proyecto que define los servicios:

- `home`: sirve la vista principal (puerto `3000`).
- `gateway`, `usuarios`, `espacios`, `reservas`: definidos por ahora como placeholders (`nginx:alpine`) a la espera de su implementación real.

