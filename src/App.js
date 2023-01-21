import AuthProvider from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './style/GlobalStyle'
import Login from "./pages/Login/Login"
import Cadastro from './pages/Login/Cadastro'
import Home from "./pages/Home/Home"
import Entrada from "./pages/Entrada"
import Saida from "./pages/Saida"


export default function App() {

    return(
      <AuthProvider>
        <GlobalStyle/>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/cadastro" element={<Cadastro/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/nova-entrada" element={<Entrada/>}/>
              <Route path="/nova-saida" element={<Saida/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    )
  }