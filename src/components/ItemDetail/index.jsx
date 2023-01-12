import React from 'react'

const ItemDetail = ({detail}) => {
    console.log(detail);
    return (
        <div>
        {'Producto: '}
        {detail.title}
        {' | Precio :'}
        {detail.price}
        {' | Descripcion:'}
        {detail.description}
        </div>
    )
    

}

export default ItemDetail