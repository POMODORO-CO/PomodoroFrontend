import React, {useState} from 'react';
import './Login.css';
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError,setPasswordError] = useState(false);

    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value)
        } else {
            if (value.length<6) {
                setPasswordError(true);
            } else {
                setPasswordError(false);
                setPassword(value)
            }
        }
    };

function handleSubmit(){
    let account = { user, password }
    if(account){
        console.log('account:',account)
    }
}

    return (
        <div className= 'login-container'>
            <Title text='¡Bienvenido!' />
            <Label text='Usuario' />
            <Input 
            attribute={{
                    id: 'usuario',
                    name: 'usuario',
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
            <button onClick={handleSubmit}>
            Ingresar
            </button>
        </div>
    )
}
export default Login
