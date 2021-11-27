import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
<<<<<<< HEAD
import MiPerfil from './Pages/Usuarios/Miperfil/MiPerfil';
import GestionUsuarios from './Pages/Usuarios/GestionUsuarios/GestionUsuarios';
import Proyecto from './Pages/Proyectos/Proyecto';
import Consulta from "./Pages/Proyectos/Consulta";
import Inscripciones from "./Pages/Proyectos/Inscripciones";
import Avances from "./Pages/Proyectos/Avances";

=======
import MiPerfil from './Pages/Users/Miperfil/MiPerfil';
import GestionUsuarios from './Pages/Users/GestionUsuarios/GestionUsuarios';
import Proyecto from './Pages/Projects/Project';
import Login from './Pages/Login/Login';
>>>>>>> DidierGarcia


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