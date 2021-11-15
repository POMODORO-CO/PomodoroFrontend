import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as RiIcons from "react-icons/ri";

export const Sidebar = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:'MiPerfil',
        path:'/miperfil',
        icon:<CgIcons.CgProfile />,
        cName: 'nav-text'
    },
    {
        title:'GestionUsuario',
        path:'/gestionusuarios',
        icon:<FaIcons.FaUsersCog />,
        cName: 'nav-text'
    },
    {
        title:'Proyecto',
        path:'/proyecto',
        icon:<RiIcons.RiDraftFill />,
        cName: 'nav-text'
    }
];
