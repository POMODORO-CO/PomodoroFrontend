import React, {useState} from 'react';
import './Login.css';
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

function handleChange(name, value){
    if(name==='usuario'){
    setUser(value)
    } else {
    setPassword(value)
    }
};

console.log('usuario:', user)
console.log('password:', password)

    return (
        <div className= 'login-container'>
            <Title text='Inicio de sesión' />
            <Label text='Usuario' />
            <Input 
            attribute={{
                    id: 'usuario',
                    name: 'Usuario',
                    type: 'text',
                    placeholder: 'Ingrese usuario'
            }}
            handleChange={handleChange}
            />
            <Label text='Contraseña' />
            <Input 
            attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Ingrese contraseña'
            }}
            handleChange={handleChange}
            />
        </div>
    )
}
export default Login
