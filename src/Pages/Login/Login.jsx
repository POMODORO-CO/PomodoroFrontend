import React, {useState} from 'react';
import './Login.css';
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';

const Login = () => {

function handleChange(name, value){
    if(name=='usuario')
    setUser(value)
}

    return (
        <div className= 'login-container'>
            <Title text='Soy un título' />
            <Label text='Usuario' />
            <Input 
            attribute={{
                    id: 'usuario',
                    name: 'usuario',
                    type: 'text',
                    placeholder: 'Ingrese su usuarios'
            }}
            />
            <Label text='Contraseña' />
            <Input 
            attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Ingrese su contraseña'
            }}
            />
        </div>
    )
}

export default Login
