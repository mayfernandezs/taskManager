# taskManager
Esta aplicación permite a los usuarios gestionar sus tareas diarias. Ofrece funcionalidades como agregar, eliminar, completar tareas y filtrarlas por estado (todas, completadas o pendientes). Está construida con **Vue.js** para el frontend y **Node.js** con **Express** y **MongoDB** para el backend.

---

## Características principales
- Ver una lista de tareas.
- Agregar nuevas tareas.
- Marcar tareas como completadas o pendientes.
- Eliminar tareas.
- Filtrar tareas por estado (todas, completadas, pendientes).
- Persistencia de datos con MongoDB.

---

## Requisitos previos
Asegúrate de tener instalados los siguientes programas en tu máquina:
- **Node.js**: [Descargar Node.js](https://nodejs.org/)
- **MongoDB**: [Descargar MongoDB](https://www.mongodb.com/try/download/community)
- **Git**: [Descargar Git](https://git-scm.com/)
- **Vue CLI**: Instalar con `npm install -g @vue/cli`

---

## Configuración

### 1. Clonar el repositorio
Clona este repositorio en tu máquina local:
  ```bash
  git clone https://github.com/tu-usuario/task-manager.git
  cd task-manager

### 2. Configurar el Backend
Entrar en la carpeta del backend:
  ```bash
  cd backend

Instalar dependencias:
  ```bash
  npm install

Crear archivo .env en la carpeta backend con el siguiente contenido:
  PORT=3000
  MONGO_URI=mongodb://localhost:27017/tasks

Iniciar el servidor backend:
  ```bash
  npm start
  Esto iniciará el servidor en http://localhost:3000.

### 3. Configurar el Frontend
Entrar en la carpeta del frontend:
  ```bash
  cd ../frontend

Instalar dependencias:
  ```bash
  npm install

Iniciar el servidor frontend:
  ```bash
  npm run serve
  Esto iniciará el servidor en http://localhost:8080.

### Pruebas E2E (End-to-End)
  La aplicación incluye pruebas end-to-end con Cypress.

Para ejecutar las pruebas:
  Ve al directorio del frontend y ejecuta el comando para abrir Cypress:
  ```bash
  npm run test:e2e
  En la ventana de Cypress, selecciona el archivo de prueba para ejecutarlo.

Uso de la aplicación:
  Abre el navegador y ve a http://localhost:8080.
  Gestiona tus tareas:
  Agrega nuevas tareas.
  Marca tareas como completadas o pendientes.
  Filtra las tareas según tu preferencia.
  Elimina tareas si es necesario.

Tecnologías utilizadas
  Frontend: Vue.js, Pinia
  Backend: Node.js, Express
  Base de datos: MongoDB
  Pruebas: Cypress

Autor
May Fernández
GitHub: mayfernandezs
