import { Outlet, useRoutes } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout'
import Register from './pages/Register'
import path from './constants/path'
import { Suspense, lazy } from 'react'
import MainLayout from './layouts/MainLayout'
import ProductList from './pages/ProductList'

function RejectedRoute() {
  return <Outlet />
}
const Login = lazy(() => import('./pages/Login'))

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElements
}
