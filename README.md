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
