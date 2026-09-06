```markdown
# Definición de Servicios del Sistema

| Servicio | Responsabilidad | ¿Qué información manejará? | ¿Con qué otros servicios se comunicará? |
| --- | --- | --- | --- |
| **Usuarios** *(Fase 1)* | Autenticar usuarios, gestionar roles (Cliente, Administrador), perfiles y datos de contacto. | Nombres, correo electrónico, contraseña encriptada, teléfono, rol y estado de la cuenta. | Ninguno directamente (recibe peticiones desde la Vista Principal). |
| **Espacios** *(Fase 1)* | Gestionar la información de hoteles/espacios, catálogo de habitaciones, capacidad, precios y disponibilidad. | Nombre del espacio, ubicación, tipos de habitación, tarifas, capacidad y calendario de disponibilidad. | **Reservas** (para verificar y bloquear disponibilidad). |
| **Reservas** *(Fase 1)* | Procesar la creación, consulta, modificación y cancelación de reservas. | ID de reserva, ID del cliente, ID del espacio, rango de fechas, total y estado (*Pendiente*, *Confirmada*, *Cancelada*). | **Espacios** (para validar disponibilidades), **Pagos** *(Fase 2)* y **Notificaciones** *(Fase 2)*. |
| **Pagos** *(Fase 2)* | Registrar y procesar las transacciones financieras de las reservas. | ID de transacción, ID de reserva, monto, método y comprobante del pago. | **Reservas** (para actualizar estado del pago). |
| **Notificaciones** *(Fase 2)* | Gestionar el envío automático de comprobantes, alertas y recordatorios. | Plantillas de mensaje, destinatario, tipo de notificación y registro de envíos. | **Reservas** y **Pagos** (escucha eventos para enviar correos/SMS). |