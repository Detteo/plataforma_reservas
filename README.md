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
