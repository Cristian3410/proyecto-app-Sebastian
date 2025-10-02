import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar/NavbarPage'
import MainContext from './components/MainContext'
import { AuthProvider } from './contexts/AuthContext'
import SeeProducts from './components/SeeProducts/SeeProducts.jsx'
import InfoPage from "../src/components/Info/InfoContext.jsx"
import FooterPage from "../src/components/Footer/FooterContext.jsx"
import ProductCatalog from './components/ProductCatalog/ProductCatalog.jsx'


function App() {


  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar/>
     <Routes>
       <Route path='/' element={<MainContext/>}/>
       <Route path='/producto/:id' element={<SeeProducts/>}/>
       <Route path='/categoria/:tipo' element={<ProductCatalog/>}/>
     </Routes>
     <InfoPage/>
     <FooterPage/>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
