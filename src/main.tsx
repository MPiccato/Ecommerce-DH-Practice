import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutMain } from './components/layouts/LayoutMain.tsx'
import './index.css'
import { Card } from './pages/Card/CardProduct.tsx'
import { Home } from './pages/Home/Home.tsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain/>,
    children: [
      {index:true, element: <Home/>},
      {path: '/cart',element: <Card/>}
    ]
  }
]) // Assuming you will set up routes later


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
