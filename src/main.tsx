import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import PrivateRoute from './middleware/authmiddleware.tsx'
import Ownership from './pages/Ownership/Index.tsx'
import OwnershipCreate from './pages/Ownership/Create.tsx'


const router = createBrowserRouter([
  { path: "/login", element: <Login />},
  {
    element: <PrivateRoute />, // ← middleware
    children: [
      //rotas de propriedade
        {path: "/propriedades", element: <Ownership />},
        {path: "/propriedades/criar", element: <OwnershipCreate />},
      ///
      {path: "/", element: <Home />},
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)


