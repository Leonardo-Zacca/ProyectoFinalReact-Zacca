import React, { useState } from "react";
import "./styles.scss";
/**
 * 
 * @param {onAdd} onAdd Función que agrega al carrito de compra 
 * @param {stock} stock El stock de producto
 * @param {initial} initial El estado inicial del contador 
 * 
 * @returns Contador
 */
const ItemCount = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial);

    const onPlus = () => {
        if (count < stock) setCount(count + 1);
    };

    const onDecrement = () => {
        if (count > initial) setCount(count - 1);
    };

    return (
        <div className="count-container">
            <button className="boton" onClick={onDecrement}>-</button>
            <span className="boton">{count}</span>
            <button className="boton" onClick={onPlus}>+</button>
            <button className="boton" onClick={() => onAdd(count)}>Confirmar compra</button> 
        </div>
    );
};

export default ItemCount;
