import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

export const NavBar = () => {
    return (
        <Menu>
            <NavLink exact to="/">Inicio</NavLink>
            <NavLink exact to="/blog">Blog</NavLink>
            <NavLink exact to="/tienda">Tienda</NavLink>
        </Menu>
    )
}

const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;

    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }

    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
    a.active {
        background: #1d85e8;
    }
`;