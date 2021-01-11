import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { BlogScreen } from '../components/blog/BlogScreen'
import { HomeScreen } from '../components/home/HomeScreen'
import { TiendaScreen } from '../components/tienda/TiendaScreen'

export const AppRouter = ({ setCarrito, carrito }) => {
    const productos = [
        {
            id: 1,
            nombre: 'Producto 1',
        },
        {
            id: 2,
            nombre: 'Producto 2',
        },
        {
            id: 3,
            nombre: 'Producto 3',
        },
        {
            id: 4,
            nombre: 'Producto 4',
        },
    ];
    return (
        <Switch>
            <Route exact path="/" component={ HomeScreen }/>
            <Route exact path="/tienda">
                <TiendaScreen productos={ productos } setCarrito={ setCarrito } carrito={ carrito } />
            </Route>
            <Route exact path="/blog" component={ BlogScreen }/>

            <Redirect to="/" />
        </Switch>
    )
}
