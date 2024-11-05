import { createBrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { RedirectRoute } from './components/RedirectRoute/RedirectRoute'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { SelectProfilePage } from './pages/SelectProfilePage/SelectProfilePage'
import { Home } from './pages/Home/Home'

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectRoute>
        <Login />
      </RedirectRoute>
    )
  }, 
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <SelectProfilePage />
      </ProtectedRoute>
    )
  },
  {
    path: "/browse",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    )
  }
])

export default router