import React from 'react'
import '../CartContainer/styles.css'

const TableRow = ({product}) => {
  return (
    <tr>
        <th scope="row">{product.id}</th>
        <td><img className="cart-image" src={product.image} alt="table-row" /></td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td><button className="boton" >Borrar</button></td>
    </tr>
  )
}

export default TableRow