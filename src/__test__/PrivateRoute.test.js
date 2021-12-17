import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import PrivateRoute from '../components/PrivateRoute/PrivateRoute'
import { UserContext } from '../context/userContext';

afterEach(cleanup);

it('renders not authorized if the roles dont match', () => {
    render(
        <UserContext.Provider value={{userData:{rol_usuario:"LIDER"}}}>
            <PrivateRoute rolelist={"ADMINISTRADOR"}>
                <div>
                    Este es el children
                </div>
            </PrivateRoute>
        </UserContext.Provider>
    );
    //verifica que el sistema tenga el texto que sale por defecto
    expect(screen.getByTestId('not-authorized')).toHaveTextContent('no esta autorizado');
})


it('renders the children if the user rol is in the rol list', () => {
    render(
        <UserContext.Provider value={{userData:{rol_usuario:"ADMINISTRADOR"}}}>
            <PrivateRoute rolelist={"ADMINISTRADOR"}>
                <div data-testid='children'>
                    Este es el children
                </div>
            </PrivateRoute>
        </UserContext.Provider>
    );
    //verifica que el sistema tenga el texto que sale por defecto
    expect(screen.getByTestId('children')).toBeInTheDocument();
})
