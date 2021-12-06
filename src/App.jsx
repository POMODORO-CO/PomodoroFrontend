import "./index.css";
import React, { useState } from 'react'

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
import Registroproyectos from "./Pages/Projects/Registroproyectos";

//pruebas del backend
import EditDataUser from "./Pages/Users/GestionUsuarios/editDataUser";
import { AuthContext } from "./context/authContext";
import { UserContext } from "./context/userContext";

// const httpLink=createHttpLink({
//   uri:'https://servidor-gql-pomodoro.herokuapp.com/graphql'
// })

const client = new ApolloClient({
  uri: 'https://servidor-gql-pomodoro.herokuapp.com/graphql',
  cache: new InMemoryCache()
})

function App() {
  const [userData, setUserData]=useState({});
  const [authToken, setAuthToken]=useState('');

  const setToken=(token)=>{
    setAuthToken(token)
    if(token){
      localStorage.setItem('token', JSON.stringify(token));
    }
  };
  return (
    <>
      <ApolloProvider client={client}>
        <AuthContext.Provider value={{setToken}}>
          <UserContext.Provider value={{userData,setUserData}}>
          <Router>
            <Routes>
              <Route path="/" element={<Landingpage />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/MiPerfil" element={<MiPerfil />} />
              <Route path="/GestionUsuarios" element={<GestionUsuarios />} />
              <Route path="/GestionUsuarios/editar/:_id" element={<EditDataUser />} />
              <Route path="/Registro" element={<Registro />} />
              <Route path="/Proyecto" element={<Proyecto />} />
              <Route path="/Proyecto/Consulta" element={<Consulta />} />
              <Route path="/Proyecto/Inscripciones" element={<Inscripciones />} />
              <Route path="/Proyecto/Registroproyectos" element={<Registroproyectos />} />
              <Route path="/Proyecto/Avances" element={<Avances />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/CerrarSesion" element={<Proyecto />} />
            </Routes>
          </Router>
          </UserContext.Provider>
        </AuthContext.Provider>
      </ApolloProvider>
    </>
  );
}
export default App;