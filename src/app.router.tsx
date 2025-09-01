import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

import { AdminProductsPage } from './admin/layouts/pages/products/AdminProductsPage';
import { DashboardPage } from './admin/layouts/pages/dashboard/DashboardPage';
import { GenderPage } from './shop/pages/gender/GenderPage';
import { HomePage } from './shop/pages/home/HomePage';
import { LoginPage } from './auth/pages/login/LoginPage';
import { ProductPage } from './shop/pages/product/ProductPage';
import { RegisterPage } from './auth/pages/register/RegisterPage';
import { ShopLayout } from './shop/layouts/ShopLayout';



const AdminLayout = lazy( () => import( './admin/layouts/AdminLayout' ) );
const AuthLayout = lazy( () => import( './auth/layouts/AuthLayout' ) );

export const appRouter = createBrowserRouter( [

  // Main routes
  {
    path: '/',
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'product/:idSlug',
        element: <ProductPage />
      },
      {
        path: 'gender/:gender',
        element: <GenderPage />
      }
    ]
  },

  // Auth routes
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  },

  // Admin routes
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: 'products',
        element: <AdminProductsPage />
      },
      {
        path: 'products/:id',
        element: <AdminProductsPage />
      },
    ]
  },

  {
    path: '*',
    element: <Navigate to="/" />
  }
] );