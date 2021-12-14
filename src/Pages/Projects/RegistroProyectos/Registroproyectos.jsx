import React, { useEffect } from "react";
import Navbar from '../../../components/Navbar/Navbar';
import imagenes from '../../../assets/img/imagenes';
import PrivateRoute from '../../../components/PrivateRoute/PrivateRoute';
import { useMutation } from '@apollo/client';
import { useNavigate } from "react-router";
import useFormData from '../../../components/UseForm/useForm.js';
import { CREAR_PROYECTO } from "../../../graphql/projects/mutationsprojects";
import { useAuth } from "../../../context/authContext";
import { GET_USUARIOS } from '../../../graphql/users/queries.js';
import { useQuery } from '@apollo/client';
import { useUser } from '../../../context/userContext';

function Registroproyectos() {
  const { userData } = useUser();
  const {
    data: queryData,
    error: queryError,
    loading: queryLoading } = useQuery(GET_USUARIOS)

  const {setToken}=useAuth();
  const navigate= useNavigate();
  const {form, formData, updateFormData}=useFormData();

  const [crearProyecto,
    { data: mutationData,
        loading: MutationLoading,
        error: mutationError }] = useMutation(CREAR_PROYECTO);

  const submitForm=(e)=>{
    e.preventDefault();
    console.log(formData)
        console.log(formData.objetivosProyecto)
        let objetivosGen = [{
        tipo: "GENERAL",
        descripcion: formData.objetivosPrim
      },{
        tipo: "ESPECIFICO",
        descripcion: formData.objetivosSec
      }
    ]
    formData.objetivosProyecto = objetivosGen;
    formData.liderProyecto = userData._id;
    formData.presupuestoProyecto = parseFloat(formData.presupuestoProyecto);
    crearProyecto({variables:{...formData}
    })
  };

  useEffect(()=>{
      if(mutationData){
      if(mutationData.crearProyecto.token){
        setToken(mutationData.crearProyecto.token);
        navigate('./Pages/Projects/ConsultasProyectos/Consulta');
      }
    };
  },[mutationData,setToken,navigate])

  return (
    <div>
      <PrivateRoute rolelist={["LIDER", "AMINISTRADOR"]}>
        <Navbar />
        <section className='flex flex-row justify-center'>
          <img src={imagenes.imag1} alt="Logo empresa" className='py-3 px-3 h-20 w-20' />
          <h1 className='px-2 text-xl text-center my-auto uppercase font-bold'>Pomodoro Projects</h1>
        </section>
        <section className='text-center '>
          <h1 className='text-3xl font-bold pt-1'>
            REGISTRO DE PROYECTOS
          </h1>
        </section>
        <section className='min-h-screen grid place-content-left bg-white px-10 justify-center'>

        <form className="w-full max-w-lg " onSubmit={submitForm} onChange={updateFormData} ref={form}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full  px-3">
                <label className="text-Black text-sm font-bold mb-2" >
                  Nombre del Proyecto
                </label>
                <input name='nombreProyecto' className="appearance-none block w-full bg-gray-50 text-gray-500 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-NProyecto" type="text" placeholder="Indique un nombre a su proyecto" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">

              <div className="w-full  px-3 py-3 ">
                <label className="text-black text-sm font-bold mb-2" htmlFor="Objetivos del Proyecto">
                  Objetivo General del Proyecto
                </label>
                <input name='objetivosPrim' className="appearance-none block w-full bg-gray-50 text-gray-500 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-objetivos" type="text" placeholder="Indique el/los objetivo/s del proyecto" />
              </div>
              <div className="w-full px-3 py-3 ">
                <label className="text-black text-sm font-bold mb-2" htmlFor="Objetivos del Proyecto">
                  Objetivo Especifico del Proyecto
                </label>
                <input name='objetivosSec' className="appearance-none block w-full bg-gray-50 text-gray-500 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-objetivos" type="text" placeholder="Indique el/los objetivo/s del proyecto" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label className="text-black text-sm font-bold mb-2" htmlFor="Presupuesto">
                  Presupuesto del Proyecto
                </label>
                <input name='presupuestoProyecto' type='number' className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="presupuesto-proyecto" placeholder="0" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">

              <div className="w-full md:w-1/2 px-3">
                <label className="text-black text-sm font-bold mb-2" htmlFor="Fecha de Inicio">
                  Fecha de inicio
                </label>
                <input type="date" name='fechaInicioProyecto' className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="fecha-inicio" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="text-Black text-sm font-bold mb-2" htmlFor="Fecha Final">
                  Fecha Final
                </label>
                <input type="date" name='fechaFinProyecto' className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="fecha-fin" />
              </div>
              <div className="w-full px-3 py-3 mb-6 md:mb-0">
                <button className="appearance-none block w-full bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type='submit'>
                  Registrar Proyecto
                </button>
              </div>
            </div>
        </form>
        </section>
      </PrivateRoute>
    </div>
  )
}

export default Registroproyectos;