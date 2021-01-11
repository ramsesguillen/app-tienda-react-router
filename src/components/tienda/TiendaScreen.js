import React from 'react'
import { Productos } from './Productos'

export const TiendaScreen = ({ productos, setCarrito, carrito }) => {
    return (
        <div>
            <p>producto</p>
            <Productos productos={ productos } setCarrito={ setCarrito } carrito={ carrito }/>
        </div>
    )
}
