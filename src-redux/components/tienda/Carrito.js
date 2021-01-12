import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'

const mapStateToProps = state => ({ carrito: state.carrito });

export const Carrito = connect(
    mapStateToProps
)(( { carrito }) => {
    return (
        <div>
            <h3>Carrito de compras</h3>
            {
                ( carrito.length > 0 )
                    ?
                        carrito.map( producto => (
                            <Producto key={ producto.id }>
                                <NombreProducto>
                                    { producto.nombre }
                                </NombreProducto>
                                Cantidad: { producto.cantidad }
                            </Producto>
                        ))
                    :
                        <Producto> ~ Aun no haz agregado productos al carrito ~ </Producto>
            }
        </div>
    )
})

const Producto = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebebf3;
    font-size: 14px;
`;

const NombreProducto = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`;