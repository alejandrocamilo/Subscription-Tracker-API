# 📦 Subscription Tracker API

> 🇬🇧 **English version below**  
> 🇪🇸 **Versión en español más abajo**

---

## 🇬🇧 English

### 🚀 Overview
**Subscription Tracker API** is a production-ready backend built with **Node.js**, **Express**, and **MongoDB**.  
It automates recurring subscription management and renewal notifications, using:
- **Upstash QStash** for background job scheduling  
- **Resend** for transactional email delivery  
- **Arcjet** for security and request protection  
- Deployed seamlessly on **Render**

### 💡 Key Features
- 🔄 Manage and track user subscriptions  
- 📧 Automated renewal reminders via Resend  
- ⏱️ Background job processing with Upstash QStash  
- 🛡️ API security with Arcjet middleware  
- 🌐 Fully RESTful endpoints  
- 🧾 Scalable and maintainable code structure

### ⚙️ Tech Stack
| Category | Technologies |
|-----------|--------------|
| Backend | Node.js · Express.js |
| Database | MongoDB |
| Queue / Jobs | Upstash QStash |
| Email | Resend API |
| Security | Arcjet |
| Deployment | Render |
| Version Control | Git & GitHub |

### 🧩 Architecture
```
Subscription-Tracker-API/
│
├── src/
│   ├── controllers/      # Request logic
│   ├── models/           # Mongoose schemas
│   ├── routes/           # RESTful API routes
│   ├── services/         # Email, queue, and security integrations
│   └── utils/            # Helpers and middleware
│
├── config/               # Env & DB configuration
├── tests/                # Integration tests
├── .env.example          # Environment variables template
└── server.js             # Entry point
```

### ⚡ Installation & Setup
```bash
# Clone repository
git clone https://github.com/alejandrocamilo/Subscription-Tracker-API.git
cd Subscription-Tracker-API

# Install dependencies
npm install

# Add environment variables
cp .env.example .env
# then fill in your API keys (MongoDB, Upstash, Resend, Arcjet)

# Start development server
npm run dev
```

### 📡 API Example
**Endpoint:** `POST /api/subscriptions`

**Body:**
```json
{
  "userEmail": "user@example.com",
  "plan": "Pro",
  "amount": 10,
  "renewalDate": "2025-12-01"
}
```

**Response:**
```json
{
  "message": "Subscription created successfully",
  "data": { "_id": "...", "userEmail": "user@example.com", ... }
}
```

---

## 🇪🇸 Español

### 🚀 Descripción General
**Subscription Tracker API** es un backend listo para producción creado con **Node.js**, **Express** y **MongoDB**.  
Automatiza la gestión de suscripciones y los recordatorios de renovación usando:
- **Upstash QStash** para la programación de tareas  
- **Resend** para el envío de correos transaccionales  
- **Arcjet** para la protección de solicitudes  
- Desplegado en **Render**

### 💡 Características Principales
- 🔄 Administración de suscripciones de usuarios  
- 📧 Recordatorios automáticos de renovación  
- ⏱️ Procesamiento en segundo plano con Upstash QStash  
- 🛡️ Seguridad API con Arcjet  
- 🌐 Endpoints completamente RESTful  
- 🧾 Código escalable y mantenible

### ⚙️ Tecnologías
| Categoría | Tecnologías |
|------------|--------------|
| Backend | Node.js · Express.js |
| Base de datos | MongoDB |
| Tareas / Colas | Upstash QStash |
| Correo | Resend API |
| Seguridad | Arcjet |
| Despliegue | Render |
| Control de versiones | Git y GitHub |

### ⚡ Instalación y Configuración
```bash
# Clonar el repositorio
git clone https://github.com/alejandrocamilo/Subscription-Tracker-API.git
cd Subscription-Tracker-API

# Instalar dependencias
npm install

# Agregar variables de entorno
cp .env.example .env
# Luego completa tus claves de API (MongoDB, Upstash, Resend, Arcjet)

# Iniciar servidor de desarrollo
npm run dev
```

### 📡 Ejemplo de API
**Endpoint:** `POST /api/subscriptions`

**Cuerpo:**
```json
{
  "userEmail": "usuario@ejemplo.com",
  "plan": "Pro",
  "amount": 10,
  "renewalDate": "2025-12-01"
}
```

**Respuesta:**
```json
{
  "message": "Suscripción creada exitosamente",
  "data": { "_id": "...", "userEmail": "usuario@ejemplo.com", ... }
}
```

---

## 📬 Contact
- **Author:** Alejandro Camilo  
- **Role:** Junior Backend Developer  
- **LinkedIn:** [linkedin.com/in/alejandrocamilo](https://linkedin.com/in/alejandrocamilo)  
- **GitHub:** [github.com/alejandrocamilo](https://github.com/alejandrocamilo)

---

## 🪪 License
This project is licensed under the **MIT License** — free to use and modify with attribution.

---

### 🌟 Support
If you like this project, give it a ⭐ on GitHub and connect with me on LinkedIn!
