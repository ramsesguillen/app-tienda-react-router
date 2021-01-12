const initialState = {
    productos: [
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
    ],

    carrito: []
};

export const tiendaReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case 'AGREGAR_PRODUCTO_AL_CARRITO':
            const { id, nombre} = action.payload;

            const existe = state.carrito.some( ct => ct.id === id );

            if ( !existe ) {
                return {
                    ...state,
                    carrito: [ ...state.carrito, { id, nombre, cantidad: 1 }]
                }
            } else {
                return {
                    ...state,
                    carrito: state.carrito.map( producto => {
                        if ( producto.id === id ) {
                            producto.cantidad = producto.cantidad + 1;
                        }
                        return producto;
                    })
                }
            }
        default:
            return state;
    }
}
