import Home from "./views/Home"
import "./index.css"
import AboutUs from "./components/AboutUs"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Candidatura from "./components/forms/Candidatura";
import Perguntas from "./components/forms/Perguntas";
import IniciarSessao from "./views/IniciarSessao";
import CriarConta from "./views/CriarConta";
import Recomendacao from "./components/Recomendacao";
import CandidaturaCliente from "./components/CandidaturaCliente";
import PerfilCliente from "./views/PerfilCliente";

function App() {

  return (
    <Router>
    <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/AboutUs" element={ <AboutUs />} />
         <Route path="/Login" element={ <IniciarSessao />} />
         <Route path="/Candidatura" element={ <Candidatura />} />
         <Route path="/CriarConta" element={ <CriarConta />} />
         <Route path="/Perguntas" element={ <Perguntas />} />
         <Route path="/Recomendacao" element={ <Recomendacao />} />
         <Route path="/CandidaturaCliente" element={ <CandidaturaCliente />} />
         <Route path="/PerfilCliente" element={ <PerfilCliente />} />
       </Routes>
   </Router>
  
 
    
  )
}

export default App
