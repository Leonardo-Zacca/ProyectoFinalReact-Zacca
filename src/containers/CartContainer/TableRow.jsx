import React, { useContext } from "react";
import { Shop } from "../../context/ShopProvider";

const TableRow = ({ product }) => {
  const { removeProduct } = useContext(Shop);

  return (
    <tr>
      <th scope="row">{product.id}</th>
      <td>
        <img className="cart-image" src={product.image} alt="table-row" />
      </td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>
        <button className="boton" onClick={() => removeProduct(product.id)}>Borrar</button>
      </td>
    </tr>
  );
};

export default TableRow;