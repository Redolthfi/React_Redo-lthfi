import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPages from './Pages/LandingPages.jsx'
import CreateProductPages from './Pages/CreateProductPages.jsx'
import { Provider } from 'react-redux'
import store from './Reduxx/Store'
const router = createBrowserRouter([
  {
    path: "/LandingPages",
    element: <LandingPages />,
  },
  {
    path: "/CreateProductPages",
    element: <CreateProductPages />,
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
