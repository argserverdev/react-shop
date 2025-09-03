# Teslo Shop - React E-commerce Platform

This is a modern, full-featured e-commerce web application built with React, TypeScript, and Vite. It provides a complete shopping experience, from browsing products to user authentication, along with a dedicated administration panel for managing the store.

## ✨ Features

- **Modern Tech Stack:** Built with React, TypeScript, and Vite for a fast and efficient development experience.
- **User Authentication:** Secure login and registration functionality.
- **Product Catalog:** Browse products by category (men, women, kids).
- **Product Details Page:** View detailed information for each product.
- **Administration Panel:** A dedicated dashboard for administrators to manage products.
- **Responsive Design:** Fully responsive layout for a seamless experience on any device.
- **Component-Based:** Organized using `shadcn/ui` for a consistent and maintainable component library.

## 🛠️ Technologies Used

- **Frontend:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Linting:** [ESLint](https://eslint.org/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or your favorite package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/react-shop.git
    cd react-shop
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

## 📂 Project Structure

The project is organized into several key directories:

```
/src
├── admin/         # Admin dashboard pages, layouts, and components
├── assets/        # Static assets like images and SVGs
├── auth/          # Authentication pages (Login, Register)
├── components/    # Shared UI components (custom & shadcn/ui)
├── lib/           # Utility functions
├── mocks/         # Mock data for development
└── shop/          # Main e-commerce pages, layouts, and components
```

-   **`src/admin`**: Contains all components, layouts, and pages related to the administration dashboard.
-   **`src/auth`**: Handles user authentication, including login and registration pages.
-   **`src/components`**: Holds reusable UI components used throughout the application. `components/ui` are from `shadcn/ui`, and `components/custom` are project-specific.
-   **`src/shop`**: Contains the core e-commerce experience, including the home page, product listings, and product detail pages.