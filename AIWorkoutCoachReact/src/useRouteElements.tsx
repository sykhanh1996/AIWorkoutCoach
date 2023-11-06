import { useRoutes } from 'react-router-dom'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <>Hello world!!!test</>
    }
  ])
  return routeElements
}
