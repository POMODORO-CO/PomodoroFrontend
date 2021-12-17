import React from 'react'
import ButtonLoading from '../components/ButtonLoading/ButtonLoading';
import {render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';



//despues de cada prueba limpie
afterEach(cleanup);


//hacer pruebas unitarias a los componentes que mas se reuzan

//prueba que el button renderiza bien
it('renders okay',()=>{
    //renderizo el componente que quiero bajo los parametros que se requieran
    render(<ButtonLoading text='hola' loading={false} disabled={false}/>);

    //este valor nos sirve para  observar la respuesta para eso el 
    //componente de respuesta debe tenet un "data-testid="button-loading" 
    expect(screen.getByTestId('button-loading')).toBeInTheDocument();

    //para ejecutar en consola debemos yarn test
})

//prueba si no muestra texto miesntras is loagind
it('shows text when not loading', ()=>{
    render(<ButtonLoading text='hola' loading={false} disabled={false}/>);
    expect(screen.getByTestId('button-loading')).toHaveTextContent('hola');
})

//prueba no muestra el text cuando esta cargando button-loading-active
it('doesnt show text when loading', ()=>{
    render(<ButtonLoading text='hola' loading={true} disabled={false}/>);
    expect(screen.getByTestId('button-loading')).not.toHaveTextContent('hola');
})

//prueba no muestra el text cuando esta cargando button-loading-active
it('shows loading component when loading', ()=>{
    render(<ButtonLoading text='hola' loading={true} disabled={false}/>);
    expect(screen.getByTestId('button-loading-active')).toBeInTheDocument();
})

