import React, { useContext } from 'react'
import TableRow from './TableRow'
import { Shop} from '../../context/ShopProvider'

const Cart = () => {

  const {products} = useContext(Shop);

  return (
    <table className="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">Código</th> 
          <th scope="col">Imagen</th>
          <th scope="col">Título</th>
          <th scope="col">Precio</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Remover</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => {
          return <TableRow key={product.id} product={product} />
        })}
      </tbody>
    </table>
  )
}

export default Cart  