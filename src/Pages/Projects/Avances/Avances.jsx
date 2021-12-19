import React, { useEffect } from 'react'
import "../../../index.css";
import Navbar from '../../../components/Navbar/Navbar'
import * as FaIcons from "react-icons/fa";
import imagenes from '../../../assets/img/imagenes';
import { useMutation } from '@apollo/client';
import { useNavigate } from "react-router";
import useFormData from '../../../components/UseForm/useForm.js';
import { CREAR_AVANCE } from "../../../graphql/projects/mutationsprojects";
import { useAuth } from "../../../context/authContext";
import { GET_USUARIO } from '../../../graphql/users/queries.js';
import { useQuery } from '@apollo/client';
import { useUser } from '../../../context/userContext';
import { GET_PROYECTOS } from '../../../graphql/projects/queriesProjects.js';
import PrivateRoute from '../../../components/PrivateRoute/PrivateRoute';

// import * as CgIcons from "react-icons/cg";
// import * as RiIcons from "react-icons/ri";

function Avances() {

    const { userData } = useUser();

    const _id = userData._id;
    const {
        data: queryData,
        error: queryError,
        loading: queryLoading } = useQuery(GET_USUARIO, { variables: { _id } })
    console.log(queryData)
    const { data: dataProjects, error: errorProjects, loading: loadingProjects } = useQuery(GET_PROYECTOS);

    const [crearAvance,
        { data: mutationData,
            loading: MutationLoading,
            error: mutationError }] = useMutation(CREAR_AVANCE);

    const { setToken } = useAuth();
    const navigate = useNavigate();
    const { form, formData, updateFormData } = useFormData();

    //

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formData)
        formData.usuarioAvance = userData._id;
        formData.fechaAvance = dataProjects.fechaAvance;
        formData.proyecto = dataProjects.nombre_proyecto;
        formData.descripcionAvance = dataProjects.descripcionAvance;
        crearAvance({
            variables: { ...formData }
        })
    };

    useEffect(() => {
        if (mutationData) {
            if (mutationData.crearAvance.token) {
                setToken(mutationData.crearAvance.token);
                navigate('./private/MiPerfil');
            }
        };
    }, [mutationData, setToken, navigate])

    useEffect(() => {
        console.log("datos del servidor: ", queryData);
    }, [queryData]);

    //encaso de que halla un error ejecute esto
    useEffect(() => {
        if (queryError) {
            <div> Error consultando Usuario</div>
        }
    }, [queryError])

    if (queryLoading) return <div className='min-h-screen flex justify-center items-center bg-gray-500'>
        <div className='bg-yellow-400 rounded-full flex min-w-max p-2'>
            <img src={imagenes.imag1} alt="Logo empresa" className='md:p-1 h-20 w-20 animate-pulse' />
            <p className='md:p-7 animate-pulse text-2xl font-bold'>Cargando Login...just wait</p>
        </div>
    </div>;

    return (
        <PrivateRoute rolelist={["LIDER", "ESTUDIANTE"]}>
            <div>
                <Navbar />
                <section className='flex flex-row justify-center'>
                    <img src={imagenes.imag1} alt="Logo empresa" className='py-3 px-3 h-20 w-20' />
                    <h1 className='px-2 text-xl text-center my-auto uppercase font-bold'>Pomodoro Projects</h1>
                </section>
                <section className='text-center '>
                    <h1 className='text-3xl font-bold pt-1'>
                        MODULO DE REGISTRO DE AVANCES
                    </h1>
                </section>
                <div className="flex items-center flex-col text-middle">

                    <div className="box pt-6">
                        <div className="box-wrapper">

                            <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                                <button className="outline-none focus:outline-none"><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                                <input type="search" name="" id="" placeholder="Buscar.." x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
                                <div className="select">
                                    <select name="" id="" x-model="image_type" className="text-sm outline-none focus:outline-none bg-transparent">
                                        <option value="all" selected>Todo</option>
                                        <option value="photo">ID</option>
                                        <option value="illustration">Nombre del proyecto</option>
                                        <option value="vector">Líder</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-2 py-4">
                        <div className="py-2 align-middle inline-block min-w-auto sm:px-6 lg:px-12">
                            <div
                                className="
                            shadow
                            overflow-hidden
                            border-b border-gray-200
                            sm:rounded-lg
                            "
                            >
                                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitForm} onChange={updateFormData} ref={form}>

                                    <table className="min-w-auto divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>

                                                <th
                                                    scope="col"
                                                    className="
                                                        px-6
                                                        py-3
                                                        text-left text-xs
                                                        font-medium
                                                        text-gray-500
                                                        uppercase
                                                        tracking-wider
                                                        "
                                                >
                                                    Nombre del proyecto
                                                </th>


                                                <th
                                                    scope="col"
                                                    className="
                                        px-6
                                        py-3
                                        text-left text-xs
                                        font-medium
                                        text-gray-500
                                        uppercase
                                        tracking-wider
                                        "
                                                >
                                                    Descripción
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                                                >
                                                    Fecha Avance
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="
                                                        px-6
                                                        py-3
                                                        text-center text-xs
                                                        font-medium
                                                        text-gray-500
                                                        uppercase
                                                        tracking-wider
                                                        "
                                                >
                                                    Acciones
                                                </th>
                                                {/* <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th> */}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">

                                            {dataProjects && dataProjects.Proyectos.map((u) => {
                                                return (
                                                    <tr key={u._id}>


                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div name="proyecto" className="text-sm text-gray-900">{u.nombre_proyecto}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <input name='descripcionAvance' type='text' className="text-sm text-gray-900" placeholder='Indique descripción' />
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <input name="fechaAvance" type='date' className="text-sm text-gray-900" />
                                                        </td>
                                                        <td
                                                            className="
                                                        px-6
                                                        py-4
                                                        whitespace-nowrap
                                                        text-center text-sm
                                                        font-medium
                                                        "
                                                        >
                                                            <a><button className="appearance-none block w-full bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type='submit'>
                                                                Guardar Avance
                                                            </button></a>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PrivateRoute>



    )
}

export default Avances;