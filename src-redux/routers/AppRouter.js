import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { BlogScreen } from '../components/blog/BlogScreen'
import { HomeScreen } from '../components/home/HomeScreen'
import { TiendaScreen } from '../components/tienda/TiendaScreen'

export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={ HomeScreen }/>
            <Route exact path="/tienda" component={ TiendaScreen }/>
            <Route exact path="/blog" component={ BlogScreen }/>

            <Redirect to="/" />
        </Switch>
    )
}
