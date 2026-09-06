# Arquitectura del Sistema - Plataforma de Reservas

```mermaid
graph TD
    subgraph Capa_Cliente [Cliente / Usuario]
        U[Usuario / Cliente Final]
    end

    subgraph Capa_Presentacion [Capa de Presentación & Entrada]
        H[Vista Principal / HOME - Docker]
        GW[API Gateway / Router]
    end

    subgraph Avance_1 [Servicios del Primer Avance - Fase 1]
        SU[Servicio de Usuarios]
        SE[Servicio de Espacios/Hoteles]
        SR[Servicio de Reservas]
    end

    subgraph Avance_2 [Componentes Futuros - Fase 2]
        SP[Servicio de Pagos - Futuro]
        SN[Servicio de Notificaciones - Futuro]
    end

    U -->|Accede mediante Navegador| H
    H -->|Peticiones HTTP/JSON| GW
    
    GW -->|Autenticación y Perfil| SU
    GW -->|Consulta de Catálogo y Disponibilidad| SE
    GW -->|Gestión de Reservas| SR

    SR -->|Verifica y Bloquea Espacio - REST| SE
    SR -.->|Evento: Reserva Creada - Asíncrono| SP
    SR -.->|Evento: Confirmación - Asíncrono| SN

    style H fill:#2ecc71,stroke:#27ae60,stroke-width:2px,color:#fff
    style SU fill:#3498db,stroke:#2980b9,stroke-width:2px,color:#fff
    style SE fill:#3498db,stroke:#2980b9,stroke-width:2px,color:#fff
    style SR fill:#3498db,stroke:#2980b9,stroke-width:2px,color:#fff
    style SP fill:#e74c3c,stroke:#c0392b,stroke-width:1px,color:#fff
    style SN fill:#e74c3c,stroke:#c0392b,stroke-width:1px,color:#fff