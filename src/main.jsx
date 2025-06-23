import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* React sees this and calls your component function:
        StoreContextProvider({ children: <App /> })
        So now In StoreContext.jsx 
        The const StoreContextProvider = (props) -> props.children is <App />.
      */}
    <StoreContextProvider>
      <App />
    </StoreContextProvider>

  </BrowserRouter>,
)
