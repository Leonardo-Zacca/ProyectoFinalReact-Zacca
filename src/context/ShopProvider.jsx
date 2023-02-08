import React from 'react'
import { useState } from 'react';
import { createContext } from "react";

export const Shop = createContext()

//Configurando contexto proveedor
//HOC o high order component
const ShopProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const addProduct = (product) => {
        const isInCart = isProductInCart(product.id)
        if (isInCart) {

            //hace algo
            //Primero vamos a encontrar el producto repetido
            const productoRepetido = products.find(element => element.id === product.id)
            productoRepetido.quantity += product.quantity
            setProducts([...products])
            
        } else {
            setProducts([...products, product])
        }

    }

    //*Lógica para eliminar productos del carrito
    const removeProduct = (productId) => {
        setProducts(products.filter((product) => product.id !== productId));
      };
    

    const countCart = () => {
        let cantidadTotal = 0;
        for (const product of products) {
            cantidadTotal += product.quantity  //recordad que el += permite sumar al valor original la nueva cantidad 
        }
        return cantidadTotal
    }

    const isProductInCart = (id) => {
        return products.some(product => product.id === id)
    }

    //* Esta función nos permite saber el total del costo del producto

    const total = () => {
        let total = 0;
        for (const product of products) {
            total += product.price * product.quantity
        }
        return total;
    }

    return (
        <Shop.Provider value = {{products , addProduct, countCart, total, removeProduct}}>  
            {children}
        </Shop.Provider>
  )
}
//Esto vendría a ser un carrito global, es consumido por varios componentes

export default ShopProvider