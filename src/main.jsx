import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import { Authprovider } from './context/Authprovider'
import ThemeProvider from './context/ThemeProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Authprovider>
        <RouterProvider router={routes}></RouterProvider>
      </Authprovider>
    </ThemeProvider>
  </StrictMode>,
)
