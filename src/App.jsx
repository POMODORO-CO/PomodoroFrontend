import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import MiPerfil from './Pages/MiPerfil';
import GestionUsuarios from './Pages/GestionUsuarios';
import Proyecto from './Pages/Proyecto';


function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/miperfil' component={MiPerfil} />
            <Route path='/gestionusuarios' component={GestionUsuarios} />
            <Route path='/proyecto' component={Proyecto} />
          </Routes>
      </Router>
    </>
  );
}
export default App;