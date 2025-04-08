import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import Login from './pages/Login.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import PrivateRoute from './middleware/authmiddleware.tsx'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <PrivateRoute />, // ← middleware
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)


