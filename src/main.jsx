import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Menu from './Components/Menu/Menu.jsx'
import About from './Components/About/About.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "menu",
    element: <Menu />,
  },
  {
    path: "about",
    element: <About />,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
