# plataforma_reservas

# PARTE 1 — ENTENDER EL PROBLEMA

## ¿Qué problema resuelve el sistema?
- Conectar viajeros con hoteles que tengan disponibilidad de habitaciones, hacer reservas y comparar precios sin intermediarios.

## ¿Quién lo usará?
- Viajeros, agencias de viajes y empresas con viajes de trabajo.

## ¿Qué pasaría si no existiera?
- El proceso de hacer reservas y consultar precios se haría más lento y dependiendo de las respuestas de intermediarios.

---

# PARTE 2 – IDENTIFICAR LOS SERVICIOS

Un sistema distribuido se divide en servicios.

## ¿Qué funciones principales tiene el sistema?
- **Usuarios:** Registro de usuarios.
- **Autenticación:** Gestión de roles y login.
- **Hoteles:** Catálogo de hoteles.
- **Disponibilidad:** Consulta de disponibilidad.
- **Reservas:** Administración de reservas.
- **Notificaciones:** Confirmación de reservas, recordatorios y ofertas.
- **Reseñas:** Calificación del servicio.

## ¿Qué partes pueden trabajar por separado?
- Autenticación
- Hoteles
- Notificaciones
- Reseñas

## ¿Qué procesos son independientes?
- Usuarios
- Hoteles
- Autenticación

---

# PARTE 3 – ¿CÓMO SE COMUNICAN?

## Conexión entre servicios

**¿Qué servicio necesita información de otro?**
- El servicio de Reservas necesita información del servicio de Disponibilidad para saber si existe una habitación disponible antes de realizar una reserva.
- También el servicio de Reservas necesita información del servicio de Hoteles para obtener los datos del hotel y de la habitación seleccionada.

**¿Quién solicita datos?**
- El servicio que necesita la información es quien realiza la solicitud. Por ejemplo, Reservas solicita información a Disponibilidad para consultar si una habitación está disponible para las fechas seleccionadas.

**¿Quién responde?**
- El servicio al que se realiza la solicitud es quien responde. Por ejemplo, Disponibilidad responde a Reservas indicando si la habitación está disponible o no.

*Ejemplo:*
- Pedidos → solicita → Inventario
- Pagos → confirma → Pedidos

---

# PARTE 4 – ELEGIR LA ARQUITECTURA

## Tipo de arquitectura

**Elegida:** Microservicios.

## Preguntas guía:

- **¿Cuántos usuarios tendrá el sistema?**  
  Inicialmente se plantea que la plataforma pueda atender miles de usuarios, con posibilidad de aumentar su capacidad a medida que crezca el número de hoteles y clientes.

- **¿Necesita escalar?**  
  Sí. La plataforma puede experimentar períodos de alta demanda, como vacaciones, fines de semana, temporadas turísticas y fechas especiales. Por esta razón, debe poder aumentar la capacidad de los servicios que reciban mayor cantidad de solicitudes.

- **¿Es un sistema pequeño o grande?**  
  Inicialmente puede considerarse un sistema de tamaño mediano, pero debe diseñarse con capacidad de crecimiento para soportar una mayor cantidad de hoteles, usuarios y reservas.

**Justificación:**  
Elegimos una arquitectura basada en microservicios porque la plataforma de reservas puede dividirse en diferentes servicios independientes, como usuarios, autenticación, hoteles, disponibilidad, reservas, notificaciones y reseñas. Cada servicio tendrá una responsabilidad específica y podrá comunicarse con los demás cuando sea necesario. Esta arquitectura también permite que determinados servicios puedan escalarse de manera independiente.

---

# PARTE 5 – BASE DE DATOS

## Datos del sistema: ¿Qué información debe guardarse?

- **Usuarios:** ID usuarios, Nombre, Correo electrónico, Contraseña, Información de contacto, Rol de usuario.
- **Hoteles:** ID hotel, Nombre, Ubicación, Descripción, Servicios ofrecidos, Información de contacto.
- **Habitaciones:** ID habitación, Hotel al que pertenece, Tipo de habitación, Precio, Capacidad, Estado de disponibilidad.
- **Reservas:** ID de la reserva, Usuario, Hotel, Habitación, Fecha de entrada, Fecha de salida, Estado de la reserva, Fecha de creación.
- **Reseñas:** Usuario, Hotel, Calificación, Comentario, Fecha de publicación.
- **Notificaciones:** Usuario destinatario, Tipo de notificación, Mensaje, Fecha, Estado de envío.

## ¿Qué datos son críticos?
- **Reservas:** Representan las operaciones transaccionales relacionadas con los usuarios.
- **Disponibilidad:** Debe mantenerse actualizada para evitar reservar una habitación que ya está ocupada.
- **Información de usuario:** Permite identificar y autenticar a los clientes.
- **Información de hoteles y habitaciones:** Necesaria para consultar el catálogo y hacer las reservas.

## ¿Qué pasaría si se pierden?
- **Usuarios:** Los usuarios podrían perder sus cuentas y no podrían iniciar sesión o consultar sus reservas.
- **Hoteles:** Los hoteles dejarían de aparecer correctamente en la plataforma y los usuarios no podrían consultar sus datos.
- **Reservas:** Se perderían los registros de reservas realizadas y los hoteles no tendrían un control confiable de sus huéspedes.
- **Disponibilidad:** El sistema mostraría habitaciones como disponibles cuando realmente están ocupadas, provocando reservas duplicadas.
- **Reseñas:** Desaparecerían las calificaciones y comentarios realizados por los usuarios.

## Pregunta clave: ¿Todos los servicios usan la misma base de datos o cada uno tiene la suya?
Como estamos utilizando una arquitectura de microservicios, lo más coherente es que cada servicio tenga su propia base de datos o almacenamiento independiente. Esto garantiza el desacoplamiento y evita dependencias directas sobre un único punto de fallo.

---

# PARTE 6 – USUARIOS Y ROLES

## ¿Quién usará el sistema?
- Cliente / Viajero
- Administrador del hotel
- Administrador del sistema
- Agencia de viajes / Empresa

## Pregunta clave: ¿Todos pueden hacer lo mismo?
**No**, cada usuario tendrá permisos diferentes de acuerdo a su rol:
- **Cliente:** Busca hoteles, consulta disponibilidad, realiza reservas, cancela reservas y deja reseñas.
- **Administrador del hotel:** Administra los datos del hotel, gestiona habitaciones y consulta las reservas del establecimiento.
- **Administrador del sistema:** Administra usuarios, asigna roles y supervisa la estabilidad global de la plataforma.
- **Agencia / Empresa:** Busca hoteles, consulta disponibilidad y gestiona reservas corporativas.

---

# AVANCE DE IMPLEMENTACIÓN

Además del análisis conceptual anterior, el proyecto ya cuenta con un primer avance de implementación contenerizado y documentado.

### Estructura del repositorio

```text
plataforma_reservas/
├── home_hotel/                      # Vista principal (HOME) del sistema
│   ├── Dockerfile
│   ├── index.html
│   ├── script.js
│   └── style.css
├── servicios/
│   └── documentacion/
│       └── definicion-servicios.md  # Ficha detallada de cada servicio
├── docs/
│   └── arquitectura/
│       └── arquitectura.md          # Diagrama de arquitectura (Mermaid)
├── docker-compose.yml               # Orquestación de los servicios con Docker
└── README.md                        # Documentación general del proyecto
```

### Diagrama de arquitectura y definición de servicios

Se formalizó la arquitectura elegida en [`docs/arquitectura/arquitectura.md`](docs/arquitectura/arquitectura.md), con un diagrama Mermaid que ilustra el flujo:

`Usuario` → `Vista Principal (HOME, en Docker)` → `API Gateway` → `Servicios (Usuarios, Espacios/Hoteles, Reservas)` → `Comunicación asíncrona futura con Pagos y Notificaciones`.

También se amplió la definición de cada servicio (responsabilidad principal, información que maneja y vías de comunicación) en [`servicios/documentacion/definicion-servicios.md`](servicios/documentacion/definicion-servicios.md), incluyendo los módulos futuros de Pagos y Notificaciones.

### Vista principal (HOME) implementada

Se construyó una primera versión del frontend HotelSys en `home/hotel/`, una landing page estática (HTML + CSS + JS) con las siguientes secciones:
- **Inicio:** Presentación general del sistema.
- **Servicios:** Tarjetas descriptivas de los servicios de la Fase 1 y Fase 2.
- **Hoteles:** Contenedor preparado para mostrar los hoteles disponibles al conectar el backend.
- **Arquitectura:** Representación visual del flujo entre componentes.
- **Equipo:** Integrantes del grupo de desarrollo.

El archivo `script.js` incluye la lógica para consultar el catálogo mediante `obtenerHoteles()`, pintar los resultados en pantalla y manejar la desconexión temporal con el servidor.

### Contenerización y orquestación

Se agregó un `Dockerfile` (basado en `nginx:alpine`) para servir la vista HOME, y un `docker-compose.yml` en la raíz del proyecto que define los contenedores:
- **`home`:** Sirve la vista principal construyendo desde `./home/hotel` y mapeando el puerto `3000:80`.
- **`gateway`, `usuarios`, `espacios`, `reservas`:** Definidos como servicios base (`nginx:alpine`) a la espera de la lógica de negocio completa.