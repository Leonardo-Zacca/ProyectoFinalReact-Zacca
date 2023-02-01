import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import "./styles.scss";

const ItemDetail = ({ detail }) => {

    const [quantity, setQuantity] = useState(0)

    const onAdd = (cantidad) => {
        console.log(`Se agregó una cantidad de productos: ${cantidad}`)
        setQuantity(cantidad)
    }

    console.log(detail.title);
    return (
        <div className="detail-container">
            <img className="detail-img" src={detail.image} alt="detalle" />
            <aside className="detail-aside">
                <h4>{detail.title}</h4>
                {
                    quantity === 0 ?
                    <ItemCount 
                        stock={20} 
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
