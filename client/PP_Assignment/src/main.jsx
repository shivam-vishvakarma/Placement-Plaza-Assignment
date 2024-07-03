import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Data from './pages/data'
import Signup from './pages/signup'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Signup/>
    },
    {
        path: '/data',
        element: <Data/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
