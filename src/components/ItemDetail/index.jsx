import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";
import ItemCount from "../ItemCount";
import "./styles.scss";

const ItemDetail = ({ detail }) => {
  const [quantity, setQuantity] = useState(0);

  const { addProduct } = useContext(Shop);

  const onAdd = (cantidad) => {
    console.log(`Se agregaron ${cantidad} productos`);
    setQuantity(cantidad);
    addProduct({ ...detail, quantity: cantidad });
  };

  return (
    <div className="detail-container">
      <img className="detail-img" src={detail.image} alt="detalle" />
      <h5 className="detail-description">{detail.description}</h5>
      <aside className="detail-aside">
        <h4 className="detail-title">{detail.title}</h4>
        {quantity === 0 ? ( //mientras la cantidad sea 0 se muetra el itemCount,de no ser 0 muestra el botón para ir al carrito
          <ItemCount
            stock={detail.stock} //! Parámetro para setear el stock de cada producto
            initial={1}
            onAdd={onAdd}
          />
        ) : (
          <button className="boton">
            <Link to="/cart">Ir al carrito</Link>
          </button>
        )}
      </aside>
    </div>
  );
};

export default ItemDetail;
