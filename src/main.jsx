import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayouts from './Layouts/HomeLayouts';
import CategoryNews from './Pages/CategoryNews';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children:[
      {
        path:"",
        element: <Navigate to={"/category/01"}></Navigate>
      },
      {
        path:"/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      }
    ]
  },
  {
    path:"/news",
    element: <h1>news layout</h1>
  },
  {
    path:"/auth",
    element: <h1>Login</h1>
  },
  {
    path:"*",
    element: <ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
