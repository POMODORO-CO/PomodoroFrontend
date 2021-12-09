import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import imagenes from '../../assets/img/imagenes';


function Registroproyectos() {
    return (
        <div>
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
        <section className='min-h-screen grid place-content-left bg-white px-10'>
        <form className="w-full " >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="text-black text-sm font-bold mb-2">
                ID del Proyecto
              </label>
              <input name='IDProyecto' className="appearance-none block w-full bg-gray-200 text-gray-500 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-IDproyecto" type="text" placeholder="001" disabled="disabled" />      
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="text-Black text-sm font-bold mb-2" >
                Nombre del Proyecto 
              </label>
              <input name='NombreProyecto' className="appearance-none block w-full bg-gray-50 text-gray-500 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-NProyecto" type="text" placeholder="Indique un nombre a su proyecto" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="text-black text-sm font-bold mb-2 " htmlFor="Líder del Proyecto">
                Líder del Proyecto
              </label>
              <div className="relative">
                <select name='liderProyecto' className="border-blue-500 block appearance-none  w-full bg-gray-50 border border-gray-200 text-gray-500 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="usuariolider">
                  <option>Usuario1</option>
                  <option>Usuario2</option>
                  <option>Usuario3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="text-black text-sm font-bold mb-2" htmlFor="Estado del proyecto">
                Estado del Proyecto
              </label>
              <div className="relative">
                <select name='EstadoProyecto' className="border-blue-500 block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-500 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="estado-proyecto">
                  <option>ACTIVO</option>
                  <option>INACTIVO</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div className="w-full  px-3 py-3 ">
              <label className="text-black text-sm font-bold mb-2" htmlFor="Objetivos del Proyecto">
                Objetivos del Proyecto
              </label>
              <input name='ObjetivoProyecto' className="appearance-none block w-full bg-gray-50 text-gray-500 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-objetivos" type="text" placeholder="Indique el/los objetivo/s del proyecto" />
            </div>
            
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 md:w-1/2">
              <label className="text-black text-sm font-bold mb-2 " htmlFor="Fase del proyecto">
                Fase del Proyecto
              </label>
              <div className="relative">
                <select name='FaseProyecto' className="border-blue-500 block appearance-none w-full bg-gray-50 border text-gray-500 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="FASEPROYECTO">
                  <option>INICIADO</option>
                  <option>DESARROLLO</option>
                  <option>TERMINADO</option>
                  <option>NULO</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div> 
                         
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="text-black text-sm font-bold mb-2" htmlFor="Presupuesto">
                Presupuesto del Proyecto
              </label>
              <input name='PresupuestoProyecto' className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-passwor" placeholder="0" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            
            <div className="w-full md:w-1/2 px-3">
              <label className="text-black text-sm font-bold mb-2" htmlFor="Fecha de Inicio">
                Fecha de inicio
              </label>
              <input type="date" name='FechaInicio' className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="fecha-inicio"  />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="text-Black text-sm font-bold mb-2" htmlFor="Fecha Final">
                Fecha Final
              </label>
              <input type="date" name='FechaFinal' className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="fecha-fin"  />
            </div>
            <div className="w-full px-3 py-3 mb-6 md:mb-0">
              <button className="appearance-none block w-full bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type='submit'>
                Registrar Proyecto
              </button>
            </div>
          </div>
        </form>
      </section>
        </div>
    )
}

export default Registroproyectos;