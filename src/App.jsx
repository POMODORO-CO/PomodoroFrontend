import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import MiPerfil from './Pages/Users/Miperfil/MiPerfil';
import GestionUsuarios from './Pages/Users/GestionUsuarios/GestionUsuarios';
import Proyecto from './Pages/Projects/Project';
import Login from './Pages/Login/Login';


function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/MiPerfil" element={<MiPerfil/>}/>
            <Route path="/GestionUsuarios" element={<GestionUsuarios/>}/>
            <Route path="/Proyecto" element={<Proyecto/>}/>
          </Routes>
      </Router>
    </>
  );
}
export default App;