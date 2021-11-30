import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import MiPerfil from './Pages/Users/Miperfil/MiPerfil';
import GestionUsuarios from './Pages/Users/GestionUsuarios/GestionUsuarios';
import Proyecto from './Pages/Projects/Project';
import Consulta from "./Pages/Projects/Consulta";
import Inscripciones from "./Pages/Projects/Inscripciones";
import Login from './Pages/Login/Login';
import Avances from './Pages/Projects/Avances';


function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/MiPerfil" element={<MiPerfil/>}/>
            <Route path="/GestionUsuarios" element={<GestionUsuarios/>}/>
            <Route path="/Proyecto" element={<Proyecto/>}/>
            <Route path="/Proyecto/Consulta" element={<Consulta/>}/>
            <Route path="/Proyecto/Inscripciones" element={<Inscripciones/>}/>
            <Route path="/Proyecto/Avances" element={<Avances/>}/>
          </Routes>
      </Router>
    </>
  );
}
export default App;