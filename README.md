
Proyecto de Reservas

Descripción

Este es un sistema de reservas que permite a los usuarios seleccionar un laboratorio, una fecha y un horario para realizar una reserva. El sistema incluye una interfaz gráfica intuitiva, una lista de reservas con opción de eliminación y comunicación con el backend mediante Axios.

Tecnologías utilizadas

React.js

React Router

React Toastify

Axios

CSS

Instalación y ejecución

Requisitos previos

Asegúrate de tener instalado Node.js y npm en tu sistema.

Instalación

Clona este repositorio:

git clone [[https://github.com/tu-usuario/proyecto-reservas.git](https://github.com/Meperd0wnas/ParcialTercio2Front)](https://github.com/Juanvelandia-p/Reservation-System-front)

Accede al directorio del proyecto:

cd proyecto-reservas

Instala las dependencias:

npm install

Ejecución

Para iniciar el servidor de desarrollo, ejecuta:

npm start

El proyecto estará disponible en http://localhost:3000/.

Estructura del Proyecto

📂 proyecto-reservas
├── 📂 src
│   ├── 📂 components
│   │   ├── App.js
│   │   ├── ReservaPage.js
│   │   ├── ReservasListPage.js
│   ├── 📂 hooks
│   │   ├── labhooks.tsx
│   │   ├── useFetchReservations.tsx
│   │   ├── useDeleteReservation.tsx
│   ├── 📂 styles
│   │   ├── App.css
│   │   ├── ReservaPage.css
│   │   ├── ReservasListPage.css
│   │   ├── index.css
│   ├── index.js
│   ├── App.js
└── package.json

Funcionalidades

1. Página Principal (App.js)

Contiene dos botones principales:

Reservar ahora: Navega a la página de reservas.

Ver reservas: Muestra la lista de reservas realizadas.

2. Página de Reservas (ReservaPage.js)

Permite a los usuarios:

Seleccionar un laboratorio.

Escoger una fecha y un horario.

Ingresar su nombre.

Enviar la reserva al backend mediante enviarReserva.

Recibir notificaciones de éxito o error mediante React Toastify.

3. Página de Lista de Reservas (ReservasListPage.js)

Muestra todas las reservas almacenadas en el sistema.

Permite eliminar reservas con un botón de eliminación.

Maneja la comunicación con el backend usando useFetchReservations y useDeleteReservation.

API del Backend

Enviar una reserva

POST /api/reservas
Content-Type: application/json

Cuerpo de la solicitud:

{
  "lab": "Ingeniería de Software",
  "reserveDate": "2024-04-01",
  "reserveTime": "10:00-11:30",
  "userName": "Juan Pérez"
}

Obtener reservas

GET /api/reservas

Eliminar una reserva

DELETE /api/reservas/{id}

Notificaciones y validaciones

Se usa React Toastify para mostrar mensajes de éxito y error.

Se valida que los campos no estén vacíos antes de enviar una reserva.

Se actualiza la lista de reservas automáticamente tras eliminar una.

Contribución

Realiza un fork del repositorio.

Crea una nueva rama (feature/nueva-funcionalidad).

Realiza tus cambios y confirma los commits.

Envía un pull request para revisión.
