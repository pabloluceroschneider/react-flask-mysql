import React from 'react';

export const Productos = ({productos}) =>{
    return (
    <div>{productos.map(p => {
        return (
            <div>
                <p>{p.name}</p>
            </div>
        )
    })}</div>
    )
}
