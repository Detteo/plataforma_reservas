// ==========================================
// CONFIGURACIÓN DE LAS APIs
// ==========================================
// Este puerto se cambiará cuando se configure
// el API Gateway en Docker Compose.

const API = {
    gateway: "http://localhost:PUERTO_GATEWAY",

    usuarios: "/usuarios",
    hoteles: "/hoteles",
    reservas: "/reservas"
};


// ==========================================
// SERVICIO DE HOTELES
// ==========================================

async function obtenerHoteles() {

    try {

        const respuesta = await fetch(
            API.gateway + API.hoteles
        );

        if (!respuesta.ok) {
            throw new Error(
                "No se pudo consultar el servicio de hoteles"
            );
        }

        const hoteles = await respuesta.json();

        console.log("Hoteles recibidos:", hoteles);

        mostrarHoteles(hoteles);

    } catch (error) {

        console.error("Error de conexión:", error);

        mostrarMensaje(
            "El servicio de hoteles todavía no está conectado."
        );
    }
}


// ==========================================
// MOSTRAR HOTELES EN EL FRONT
// ==========================================

function mostrarHoteles(hoteles) {

    const contenedor =
        document.getElementById("hoteles-container");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    hoteles.forEach(hotel => {

        const tarjeta =
            document.createElement("article");

        tarjeta.className = "hotel-result";

        tarjeta.innerHTML = `
            <h3>${hotel.nombre || "Hotel"}</h3>

            <p>
                ${hotel.ciudad ||
                  hotel.ubicacion ||
                  "Ubicación no disponible"}
            </p>

            <button onclick="reservarHotel(${hotel.id || 0})">
                Reservar
            </button>
        `;

        contenedor.appendChild(tarjeta);
    });
}


// ==========================================
// RESERVAS
// ==========================================

function reservarHotel(idHotel) {

    alert(
        "Hotel seleccionado.\n\n" +
        "La reserva se conectará con el servicio " +
        "de Reservas."
    );

    console.log(
        "Hotel seleccionado:",
        idHotel
    );
}


// ==========================================
// MENSAJES DE CONEXIÓN
// ==========================================

function mostrarMensaje(mensaje) {

    const contenedor =
        document.getElementById("hoteles-container");

    if (!contenedor) return;

    contenedor.innerHTML = `
        <div class="connection-message">
            <p>${mensaje}</p>
        </div>
    `;
}


// ==========================================
// BOTÓN DE BÚSQUEDA
// ==========================================

const botonBuscar =
    document.querySelector(
        ".booking-preview button"
    );

if (botonBuscar) {

    botonBuscar.addEventListener(
        "click",
        () => {

            obtenerHoteles();

        }
    );
}