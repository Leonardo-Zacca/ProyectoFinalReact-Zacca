import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import productJson from '../../data/products.json';
import "./styles.css";

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const {id} = useParams()

  //Este effect se ejecuta cuando se monta el componente
  useEffect(()=> {

    //CASO JSON propio
    const getProductDetail = () => {

      const obtenerProducto = new Promise((res, rej) => {
        setTimeout(()=> {
          res(productJson)
        }, 3000)
      })

      obtenerProducto
      .then( productos => {
        if (id) { 
          const detalleProducto = productos.find(producto => producto.id.toString() === id) 
          console.log(detalleProducto) 
          setDetail(detalleProducto) 
        }
      })
      .catch(error => console.log(error))
    }

    getProductDetail()

  }, [id])

  return (
    //En return no se puede colocar if, solamente operadores ernarios por que el if no necesariamente me devuelve algo, los ternarios siempre me devuelven algo en base a una condición
    <div>
        {
          Object.keys(detail).length === 0
          ? <h2 className='carga'>Cargando producto...</h2>
          : <ItemDetail detail={detail}/>
        }
        
    </div>
  )
}

export default ItemDetailContainer