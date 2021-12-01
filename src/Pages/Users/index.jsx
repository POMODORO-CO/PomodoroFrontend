import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from '../../graphql/users/queries';
import { Link } from 'react-router-dom';


const IndexUsuarios = () => {

    //uso un hook 'useQuery(GET_USUARIOS)' donde 'GET_USUARIOS' es una funcion glp para devolver la info
    const { 
            data:queryData, 
            error:queryError, 
            loading:queryLoading } = useQuery(GET_USUARIOS)


    useEffect(() => {
        console.log("datos del servidor: ", queryData);
    }, [queryData]);

    //encaso de que halla un error ejecute esto
    useEffect(()=>{
        if (queryError){
            <div> Error consultando Usuarios</div>
        }
    },[queryError])

    if (queryLoading) return <div>Cargando......</div>;

    return (
        <>
            <div>
                todos los usurios
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>documento</th>
                            <th>Estado</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        {queryData &&
                            queryData.Usuarios.map((u)=>{
                                return(
                                    <tr key={u._id}>
                                        <td>{u.nombre_usuario}</td>
                                        <td>{u.apellido_usuario}</td>
                                        <td>{u.documento_usuario}</td>
                                        <td>{u.email_usuario}</td>
                                        <td>{u.estado_usuario}</td>
                                        <td>{u.rol_usuario}</td>
                                        <td>
                                            <Link to={`/pruebaBack/editar/${u._id}`}>
                                                <i>editar</i>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}                       
                    </tbody>

                </table>
            </div>
        </>
    )
}
export default IndexUsuarios;