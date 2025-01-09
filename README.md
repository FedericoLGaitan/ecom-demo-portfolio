# eCommerce App

Este es un proyecto de eCommerce desarrollado utilizando **Next.js** en el frontend y **Strapi** como backend. La aplicación permite a los usuarios navegar por productos, añadirlos al carrito y realizar pedidos. También incluye un panel de administración para gestionar productos, categorías y órdenes.

## Características

- **Frontend con Next.js**
  - Renderizado del lado del servidor (SSR) para un mejor SEO.
  - Rutas dinámicas para productos y categorías.
  - Manejo de estados globales con Context API/Redux.
  - Autenticación de usuarios y manejo de sesiones.
  - Carrito de compras persistente con localStorage.
  - Integración con un sistema de pasarela de pago (Stripe/PayPal).

- **Backend con Strapi**
  - API RESTful para productos, categorías, usuarios y pedidos.
  - Panel de administración amigable para la gestión de contenido.
  - Autenticación y autorización basadas en roles.
  - Conexión a base de datos (MySQL/PostgreSQL).

## Tecnologías Utilizadas

- **Frontend:**
  - Next.js
  - React
  - Tailwind CSS (para el diseño)
  - Axios (para peticiones HTTP)
  - Redux/Context API (para manejo de estado)
  - SweetAlert (para alertas y notificaciones)

- **Backend:**
  - Strapi
  - Node.js
  - PostgreSQL/MySQL
  - JWT (para autenticación)

## Instalación

### Prerequisitos
- Node.js (v14 o superior)
- npm o yarn
- Base de datos PostgreSQL o MySQL

### Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/ecommerce-app.git
cd ecommerce-app
