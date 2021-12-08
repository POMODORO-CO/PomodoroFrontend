import "./index.css";
import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import jwt_decode from 'jwt-decode'

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

import AuthLayout from "./layouts/AuthLayout";
import PrivateLayout from "./layouts/PrivateLayout";

import EditDataUser from "./Pages/Users/GestionUsuarios/editDataUser";
import { AuthContext } from "./context/authContext";
import { UserContext } from "./context/userContext";

const httpLink = createHttpLink({
  uri: 'https://servidor-gql-pomodoro.herokuapp.com/graphql'
})

const authLink = setContext((_, { headers }) => {

  //encada request de graphql obtenemos el token y lo enviamos al back
  const token = JSON.parse(localStorage.getItem('token'));
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
},)

function App() {
  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState('');

  const setToken = (token) => {
    setAuthToken(token)
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    if (authToken) {
      const decoded = jwt_decode(authToken);
      setUserData({
        _id: decoded._id,
        email_usuario:decoded.email_usuario,
        rol_usuario:decoded.rol_usuario,
        estado_usuario:decoded.estado_usuario,
        autenticado_usuario:decoded.autenticado_usuario
      });
    }
  }, [authToken]);

  return (
    <>
      <ApolloProvider client={client}>
        <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
          <UserContext.Provider value={{ userData, setUserData }}>
            <Router>
              <Routes>

                <Route path="/" element={<AuthLayout />} >
                  <Route path="" element={<Landingpage />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/Registro" element={<Registro />} />
                </Route>

                <Route path="/private" element={<PrivateLayout/>}>
                  <Route path="MiPerfil" element={<MiPerfil />} />
                  <Route path="GestionUsuarios" element={<GestionUsuarios />} />
                  <Route path="GestionUsuarios/editar/:_id" element={<EditDataUser />} />
                  <Route path="Proyecto" element={<Proyecto />} />
                  <Route path="Proyecto/Consulta" element={<Consulta />} />
                  <Route path="Proyecto/Inscripciones" element={<Inscripciones />} />
                  <Route path="Proyecto/Registroproyectos" element={<Registroproyectos />} />
                  <Route path="Proyecto/Avances" element={<Avances />} />
                  <Route path="Home" element={<Home />} />
                  <Route path="CerrarSesion" element={<Proyecto />} />
                </Route>

              </Routes>
            </Router>
          </UserContext.Provider>
        </AuthContext.Provider>
      </ApolloProvider>
    </>
  );
}
export default App;