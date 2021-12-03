import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import MiPerfil from './Pages/Users/Miperfil/MiPerfil';
import GestionUsuarios from './Pages/Users/GestionUsuarios/GestionUsuarios';
import Proyecto from './Pages/Projects/Project';
import Consulta from "./Pages/Projects/Consulta";
import Inscripciones from "./Pages/Projects/Inscripciones";
import Login from './Pages/Login/Login';
import Registro from "./Pages/Login/Registro";
import Avances from './Pages/Projects/Avances';
import Home from "./Pages/Home/Home";
import Landingpage from "./Pages/Landingpage/Landingpage";
import EditDataUser from "./Pages/Users/GestionUsuarios/editDataUser";

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
            <Route path="/GestionUsuarios/editar/:_id" element={<EditDataUser />} />
            <Route path="/Proyecto" element={<Proyecto />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/CerrarSesion" element={<Proyecto/>}/>
            <Route path="/Proyecto/Consulta" element={<Consulta/>}/>
            <Route path="/Proyecto/Inscripciones" element={<Inscripciones/>}/>
            <Route path="/Proyecto/Avances" element={<Avances/>}/>
            <Route path="/Home" element={<Home />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}
export default App;