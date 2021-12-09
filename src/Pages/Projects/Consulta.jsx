import React, { useEffect } from 'react'
import "../../index.css";
import Navbar from '../../components/Navbar/Navbar'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useQuery } from '@apollo/client';
import { GET_PROYECTOS, GET_PROYECTOS_LIDER } from '../../graphql/users/queries';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import { useUser } from '../../context/userContext';
import LiderConsulta from './Users/LiderConsulta';
import EstudianteConsulta from './Users/EstudianteConsulta';

function Consulta() {

    const rolPrueba ="LIDER";
    const { userData } = useUser();
    const rolUser = userData.rol_usuario;
    const usuarioID = userData._id;
    const { data, error, loading } = useQuery(GET_PROYECTOS);
    const { dataP_Lider, errorP_Lider, loadingP_Lider } = useQuery(GET_PROYECTOS_LIDER, {variables: {usuarioID}},);

    return (
        <>
            <Navbar />
            <div className='consulta'>
                <h1>CONSULTA DE PROYECTOS</h1>
            </div>
                {rolPrueba ==="LIDER" ?
                <LiderConsulta/> :
                rolPrueba ==="ESTUDIANTE" ?
                <EstudianteConsulta/> :
                rolPrueba ==="ADMINISTRADOR" ?
                <div>ES UN ADMINISTRADOR</div> :
                <div>Error</div>

                }
            


        </>


    )
}

export default Consulta;