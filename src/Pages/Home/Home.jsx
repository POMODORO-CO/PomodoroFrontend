import React from 'react';
import "../Home/Home.css";

function Home() {
  return (
    <main>
      
        <div className='home'>
          <h2>Bienvenido a Pomodoro</h2>
        </div>

      <section>
                <h1>Seleccione el módulo al cuál desea acceder.</h1>
                <nav>
                    <ul className="ulHome">
                            <li>
                                <path className="ulMain" exact to="/miperfil">
                                    PERFIL
                                    <img src="Home/user.png" alt="image"/>
                                </path>
                            </li>                    
                            <li>
                                <path className="ulMain" exact to="/proyecto">
                                    PROYECTOS
                                    <img src="Home/project.png" alt="image"/>
                                </path>                     
                            </li>
                    </ul>
                </nav>
            </section>

    </main>
  );
}

export default Home;