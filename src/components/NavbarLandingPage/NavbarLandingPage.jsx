import React from "react";
import imagenes from '../../assets/img/imagenes';
import { NavLink } from 'react-router-dom';

function NavbarLandingPage() {
    return (
        <div>
              <section className='container mx-auto px-6'>
        <nav className='py-4 flex justify-between'>
                    <section className='flex flex-row justify-center'>
                        <img src={imagenes.imag1} alt="Logo empresa" className='py-3 px-3 h-20 w-20' />
                        <h1 className='px-2 text-xl text-center my-auto uppercase font-bold'>Pomodoro</h1>
                    </section>
                    <section className='flex flex-row justify-center space-x-8'>
                        <section className='flex flex-row justify-center my-auto space-x-4'>
                            <a href='/' className='px-2 font-bold'>Servicios</a>
                            <a href="/" className='px-2 font-bold'>Experiencias</a>
                            <a href="/" className='px-2 font-bold'>Metodología</a>
                            <a href="/" className='px-2 font-bold'>Herramientas</a>
                        </section>
                        <section className='flex flex-row justify-center items-center my-auto space-x-4'>
                            <NavLink to='/Login' className='px-2 font-bold'> Login </NavLink>
                            <section className='w-0.5 h-6 bg-yellow-400 opacity-50'></section>
                            <NavLink to='/Registro'>
                            <button className="py-2 px-6 text-blue-900 font-bold rounded-full bg-yellow-400 shadow-lg block md:inline-block">Registro</button>
                            </NavLink>
                        </section>
                    </section>
                </nav>
        </section> 
        </div>
    )
}

export default NavbarLandingPage
