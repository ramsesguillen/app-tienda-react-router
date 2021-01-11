import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { Carrito } from './components/tienda/Carrito';
import { NavBar } from './components/ui/NavBar';
import { AppRouter } from './routers/AppRouter';

export const App = () => {

  const [carrito, setCarrito] = useState([]);

  return (
    <Router>
      <Contenedor>
        <NavBar />
        <main>
          <AppRouter setCarrito={ setCarrito } carrito={ carrito } />
        </main>
        <aside>
          <Carrito carrito={ carrito }/>
        </aside>
      </Contenedor>
    </Router>
  )
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

