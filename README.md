# React Shop

Este es un proyecto de una tienda en línea moderna construida con React, TypeScript y Vite. Utiliza Tailwind CSS para el estilizado y componentes de Radix UI como base para la interfaz de usuario.

## Objetivo del Proyecto

El objetivo de este proyecto es demostrar la construcción de una aplicación de comercio electrónico front-end completa y moderna utilizando las últimas tecnologías y mejores prácticas del ecosistema de React. Sirve como un ejemplo práctico de cómo estructurar una aplicación escalable, mantener un código limpio y ofrecer una experiencia de usuario fluida.

## Características

- **Stack Moderno:** React 19, Vite, y TypeScript.
- **Estilizado con Tailwind CSS:** Un framework de CSS "utility-first" para un diseño rápido y responsivo.
- **Componentes Accesibles:** Usa Radix UI como base para componentes de UI personalizados y accesibles.
- **Enrutamiento:** Implementado con `react-router-dom` para una navegación fluida entre páginas.
- **Linting:** Configurado con ESLint para mantener la calidad y consistencia del código.
- **Estructura Escalable:** Organizado en módulos (auth, admin, shop) para una mejor separación de responsabilidades.

## Tecnologías Utilizadas

- **Framework:** [React 19](https://react.dev/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Enrutamiento:** [React Router](https://reactrouter.com/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [Radix UI](https://www.radix-ui.com/) y [shadcn/ui](https://ui.shadcn.com/)
- **Linting:** [ESLint](https://eslint.org/)

## Empezando

Sigue estas instrucciones para tener una copia del proyecto corriendo en tu máquina local para desarrollo y pruebas.

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 20.x o superior recomendada)
- [npm](https://www.npmjs.com/) (usualmente viene con Node.js)

### Instalación

1.  Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/react-shop.git
    ```
2.  Navega al directorio del proyecto:
    ```sh
    cd react-shop
    ```
3.  Instala las dependencias:
    ```sh
    npm install
    ```

## Scripts Disponibles

En el directorio del proyecto, puedes correr:

### `npm run dev`

Corre la aplicación en modo de desarrollo.
Abre [http://localhost:5173](http://localhost:5173) para verla en tu navegador. La página se recargará si haces cambios.

### `npm run build`

Compila la aplicación para producción en la carpeta `dist`.
Empaqueta React en modo de producción y optimiza la compilación para el mejor rendimiento.

### `npm run lint`

Ejecuta el linter (ESLint) en todos los archivos del proyecto para verificar problemas de estilo y código.

### `npm run preview`

Inicia un servidor local para previsualizar la compilación de producción que se encuentra en `dist`.

## Estructura del Proyecto

```
react-shop/
├── src/
│   ├── admin/         # Layouts y páginas de administración
│   ├── assets/        # Imágenes y otros recursos estáticos
│   ├── auth/          # Componentes y páginas de autenticación
│   ├── components/    # Componentes de UI reutilizables (base y personalizados)
│   ├── lib/           # Funciones de utilidad (ej. cn para clases de Tailwind)
│   ├── mocks/         # Datos de prueba para simular una API
│   └── shop/          # Componentes y páginas principales de la tienda
├── public/            # Archivos estáticos públicos
├── package.json       # Dependencias y scripts del proyecto
└── vite.config.ts     # Configuración de Vite
```
