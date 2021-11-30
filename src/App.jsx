import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'

import MiPerfil from './Pages/Users/Miperfil/MiPerfil';
import GestionUsuarios from './Pages/Users/GestionUsuarios/GestionUsuarios';
import Proyecto from './Pages/Projects/Project';
import Login from './Pages/Login/Login';
import Registro from "./Pages/Login/Registro";
import Home from "./Pages/Home/Home";
import Landingpage from "./Pages/Landingpage/Landingpage";

//pruebas del backend
import IndexUsuarios from "./Pages/Users";
import EditarUsuario from "./Pages/Users/editarUsuario";

// const httpLink=createHttpLink({
//   uri:'https://servidor-gql-pomodoro.herokuapp.com/graphql'
// })

const client=new ApolloClient({
  uri:'https://servidor-gql-pomodoro.herokuapp.com/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/MiPerfil" element={<MiPerfil />} />
            <Route path="/GestionUsuarios" element={<GestionUsuarios />} />
            <Route path="/Proyecto" element={<Proyecto />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/Home" element={<Home />} />

            <Route path="/pruebaBack" element={<IndexUsuarios />} />
            <Route path="/pruebaBack/editar/:_id" element={<EditarUsuario />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}
export default App;