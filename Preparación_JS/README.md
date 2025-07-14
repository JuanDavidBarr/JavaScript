
# 📌 Proyecto SPA - Gestión de Eventos

## Descripción
Este proyecto es una **Single Page Application (SPA)** para la **gestión de eventos**, implementado con **HTML5**, **CSS3** y **JavaScript Vanilla**, complementado con **json-server** para simular una base de datos. Permite la administración de eventos, autenticación de usuarios con roles diferenciados y persistencia de sesión mediante LocalStorage.

## 🎯 Funcionalidades Implementadas
### 🔐 Autenticación
- Registro de usuarios con roles: `admin` y `visitor`.
- Inicio de sesión con validación de credenciales.
- Protección de rutas mediante guardianes de sesión.

### 💾 Persistencia de Sesión
- La sesión del usuario permanece activa entre recargas usando LocalStorage.
- Persistencia de sesión tras iniciar sesión.

### 🗂️ Gestión de Datos
- CRUD completo de **usuarios** y **eventos**:
  - **Admin:** puede crear, leer, editar y eliminar eventos.
  - **Visitor:** puede visualizar y registrarse en eventos disponibles.
- Sincronización total con la base de datos simulada en `json-server`.

### 🗺️ Lógica de Rutas
- Rutas protegidas: si el usuario no está autenticado es redirigido a la página de login.
- Redirección automática según el estado de autenticación.

### 🎨 Interfaz de Usuario
- Aplicación responsiva y accesible.
- Sidebar y Header dinámicos con el usuario autenticado.
- Formularios amigables para login, registro y creación de eventos.

### 👤 Tipos de Usuario
- **Administrador:** gestiona usuarios y eventos (CRUD completo).
- **Visitante:** visualiza eventos y se inscribe.

## 🖥️ Vistas Disponibles
| Vista                  | Ruta                               |
|------------------------|------------------------------------|
| Dashboard principal    | `/dashboard`                      |
| Crear Evento           | `/dashboard/events/create`        |
| Editar Evento          | `/dashboard/events/edit/:id`      |
| Login                  | `/login`                          |
| Registro               | `/register`                       |
| Página No Encontrada   | `/not-found`                      |

## 🛠 Tecnologías Utilizadas
- **HTML5**
- **CSS3 (Flexbox / Grid)**
- **JavaScript Vanilla (ES6+)**
- **json-server**

## ⚙️ Estructura del Proyecto
```
/app
.gitignore
index.html
index.js
package.json
README.md
db.json
```

## 🚀 Instrucciones de Instalación
1. Clona el repositorio:
```
git clone <URL-del-repositorio>
```

2. Instala las dependencias y ejecuta json-server:
```
npm install json-server
json-server --watch db.json --port 3000
```

3. Abre el archivo `index.html` en tu navegador.

## 🧩 Base de Datos Simulada
Se encuentra en el archivo `db.json` e incluye:
- Usuarios (Admins y Visitors)
- Eventos
- Inscripciones

## 📬 Colección POSTMAN
Incluye una colección para probar todos los endpoints de la API simulada.

## 👨‍💻 Autor
- **Nombre:** Juan David Barrera Patiño
- **Clan:** Riwi
- **Fecha:** 2025

## 📚 Recursos
- [Documentación oficial de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- Documentación interna del proyecto en este repositorio.

---
> Este proyecto fue desarrollado como parte del módulo 3 de JavaScript en Riwi.

