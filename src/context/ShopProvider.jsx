import React from 'react'
import { useState } from 'react';
import { createContext } from "react";

export const Shop = createContext()

//Configurando contexto proveedor
//HOC o high order component
const ShopProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const addProduct = (product) => {
        setProducts([...products, product])
    }

    return (
        <Shop.Provider value = {{products , addProduct}}>  
            {children}
        </Shop.Provider>
  )
}
//Esto vendría a ser un carrito global, es consumido por varios componentes
export default ShopProvider