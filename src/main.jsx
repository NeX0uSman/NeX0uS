import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './components/Main/Main.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductPage from './components/ProductPage/ProductPage.jsx'
import Layout from './components/Layout/Layout.jsx'
import { PhoneProvider } from './context/Context.jsx'
import Catalog from './components/Catalog/Catalog.jsx'
import Cart from './components/Cart/Cart.jsx'
import { CartProvider } from './components/CartProvider/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CartProvider><Layout /></CartProvider>}>
          <Route index element={<Main />} />
          <Route path="products" element={<Catalog />} />
          <Route path="product/:id" element={<PhoneProvider><ProductPage/></PhoneProvider>} />
          <Route path="cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
