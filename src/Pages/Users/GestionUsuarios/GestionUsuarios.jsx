import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import * as FaIcons from "react-icons/fa";
import imagenes from '../../../assets/img/imagenes';
import SearchUser from './searchUser';

function GestionUsuarios() {
    return (
        <div>
            <Navbar />
            <section className='flex flex-row justify-center'>
                <img src={imagenes.imag1} alt="Logo empresa" className='py-3 px-3 h-20 w-20' />
                <h1 className='px-2 text-xl text-center my-auto uppercase font-bold'>Pomodoro Projects</h1>
            </section>
            <section className='text-center '>
                <h1 className='text-3xl font-bold pt-1'>
                    MODULO DE GESTIÓN DE USUARIOS
                </h1>
            </section>
            <div className="flex items-center flex-col text-middle">

                <div className="box pt-8 items-center">
                    <div className="flex wrap items-center text-middle">
                        <h1 className="p-3">Ingrese la identificación</h1>
                        <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                            <button className="outline-none focus:outline-none"><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                            <input type="search" name="" id="" placeholder="Buscar.." x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
                        </div>
                    </div>
                </div>
            </div>
            <SearchUser />
        </div>
    )
}

export default GestionUsuarios;