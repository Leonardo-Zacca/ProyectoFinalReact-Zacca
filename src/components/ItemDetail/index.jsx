import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import "./styles.scss";

const ItemDetail = ({ detail }) => {

    const [quantity, setQuantity] = useState(0)

    const onAdd = (cantidad) => {
        console.log(`Se agregaron ${cantidad} productos`)
        setQuantity(cantidad)
    }

    console.log(detail.title);
    return (
        <div className="detail-container">
            <img className="detail-img" src={detail.image} alt="detalle" />
            <aside className="detail-aside">
                <h4>{detail.title}</h4>
                {
                    quantity === 0 ?   //mientras la cantidad sea 0 se muetra el itemCount,de no ser 0 muestra el botón para ir al carrito
                    <ItemCount 
                        stock={10}    //! Parámetro para setear el stock de cada producto 
                        initial={1} 
                        onAdd={onAdd}    
                    />
                    :
                    <button className="boton">
                        <Link to="/cart">
                            Ir al carrito
                        </Link>
                    </button>
                }
            </aside>
        </div>
    );
};

export default ItemDetail;
