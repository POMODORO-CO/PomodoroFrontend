import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MiPerfil from './Pages/Users/Miperfil/MiPerfil';
import GestionUsuarios from './Pages/Users/GestionUsuarios/GestionUsuarios';
import Proyecto from './Pages/Projects/Project';
import Login from './Pages/Login/Login';
import Home from "./Pages/Home/Home";
import Landingpage from "./Pages/Landingpage/Landingpage";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/MiPerfil" element={<MiPerfil />} />
          <Route path="/GestionUsuarios" element={<GestionUsuarios />} />
          <Route path="/Proyecto" element={<Proyecto />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;