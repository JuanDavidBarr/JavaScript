
# 📚 SPA - Panel de Administración con Autenticación y Gestión de Cursos

## 📌 Objetivo
Desarrollar una **Single Page Application (SPA)** que permita la gestión de usuarios y cursos, con autenticación y control de acceso por roles:
- **Administrador:** puede crear, leer, actualizar y eliminar usuarios y cursos.
- **Visitante:** puede registrarse, iniciar sesión, visualizar los cursos disponibles y registrarse a ellos.

---

## 🚀 Tecnologías Utilizadas
- **HTML5**
- **CSS3** (Flexbox y Grid)
- **JavaScript Vanilla (ES6+)**
- **json-server** (para simular una API RESTful)

> ❌ **Restricciones:**  
No se utilizaron frameworks de JS (React, Vue, Angular), librerías CSS (Bootstrap, Tailwind) ni jQuery.

---

## 🎯 Funcionalidades

### 🔐 Módulo de Autenticación
- Registro de usuarios (visitantes y administradores)
- Inicio de sesión
- Validación de credenciales
- Almacenamiento de sesión con `localStorage`

### 👥 Gestión de Roles
- **Administrador**
  - Acceso exclusivo al panel administrativo
  - CRUD completo de **usuarios**
  - CRUD completo de **cursos**
- **Visitante**
  - Visualización de cursos disponibles
  - Inscripción a cursos

### 🎨 Interfaz de Usuario
- Pantallas de **login** y **registro**
- **Dashboard** para el administrador
- Vista pública para visitantes
- **Sidebar** de navegación
- **Header** con información del usuario logueado
- Tablas de usuarios y cursos
- Formulario de creación/edición de usuarios y cursos
- Modal de confirmación en acciones sensibles
- Diseño **responsive** y accesible

---

## 🗂️ Estructura de Datos (db.json)
```json
{
  "users": [
    {
      "id": 1,
      "name": "Admin",
      "email": "admin@admin.com",
      "password": "admin123",
      "role": "admin",
      "phone": "1234567890",
      "enrollNumber": "98765432100000",
      "dateOfAdmission": "01-Jan-2020"
    }
  ],
  "courses": [
    {
      "id": 1,
      "title": "Introducción a JavaScript",
      "description": "Curso básico de JavaScript",
      "startDate": "10-Jul-2025",
      "duration": "4 semanas"
    }
  ],
  "enrollments": [
    {
      "id": 1,
      "userId": 2,
      "courseId": 1
    }
  ]
}
```

---

## 📁 Estructura de Archivos

```
/src
│
├── /assets
│
├── /components
│   ├── header.js
│   ├── sidebar.js
│   └── modal.js
│
├── /pages
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   └── public.html
│
├── /services
│   ├── auth.js
│   ├── users.js
│   ├── courses.js
│   └── enrollments.js
│
├── /utils
│   ├── validation.js
│   └── storage.js
│
├── main.js
└── db.json
```

---

## ✅ Cómo Ejecutar el Proyecto

1. **Clona el repositorio:**
```bash
git clone <url-del-repositorio>
```

2. **Instala json-server:**
```bash
npm install -g json-server
```

3. **Ejecuta json-server:**
```bash
json-server --watch src/db.json --port 3000
```

4. **Abre el archivo HTML correspondiente en el navegador:**  
Por ejemplo, para empezar el login:
```
src/pages/login.html
```

---

## 🛠️ Recomendaciones
- Asegúrate de mantener actualizado el archivo `db.json` con IDs únicos.
- Personaliza los estilos en la carpeta `/assets`.
- Valida correctamente en el frontend con los métodos disponibles en `/utils/validation.js`.

---

## 📌 Créditos
Proyecto desarrollado como parte de un reto de programación educativa.
