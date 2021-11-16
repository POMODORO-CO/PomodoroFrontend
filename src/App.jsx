import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import MiPerfil from './Pages/Usuarios/Miperfil/MiPerfil';
import GestionUsuarios from './Pages/Usuarios/GestionUsuarios/GestionUsuarios';
import Proyecto from './Pages/Proyectos/Proyecto';


function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/MiPerfil" element={<MiPerfil/>}/>
            <Route path="/GestionUsuarios" element={<GestionUsuarios/>}/>
            <Route path="/Proyecto" element={<Proyecto/>}/>
          </Routes>
      </Router>
    </>
  );
}
export default App;