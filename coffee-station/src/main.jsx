import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import CoffeeCard from './component/CoffeeCard/CoffeeCard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[{
      path:'/',
      element:<Home></Home>,
      loader: () => fetch('../categories.json'),
      children:[{
        path:"/",
        element:<CoffeeCard></CoffeeCard>,
        loader: () => fetch('../coffees.json'),
      },
      {
        path:"/category/:category",
        element:<CoffeeCard></CoffeeCard>,
        loader: () => fetch('../coffees.json'),
      }
    ]
    },
  ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
