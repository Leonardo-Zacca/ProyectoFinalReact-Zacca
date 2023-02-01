import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Ad from '../../components/Ad';
import ItemList from '../../components/ItemList';
import productJson from '../../data/products.json';
import './styles.css';

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  const [adVisibility, setAdVisibility] =useState(true)

  //Lo primero es capturar la categoría que quiero filtrar
  const {categoryId}  = useParams()
  console.log(categoryId)

  //Se ejecuta este efecto cuando se monta componente
  useEffect(()=> {

    //Caso con archivo JSON propio
    const getProducts = () => {

      const obtenerProductos = new Promise((res, rej) => {
        setTimeout(()=> {
          res(productJson)
        }, 3000)
      })

      obtenerProductos
      .then( productos => {
        if (categoryId) { 
          const productosFiltradosPorCategoria = productos.filter(producto => producto.category === categoryId) 
          console.log(productosFiltradosPorCategoria) 
          setProducts(productosFiltradosPorCategoria) 
        } else { 
          setProducts(productos) 
        }
      })
      .catch(error => console.log(error))
    }

    getProducts()
  }, [categoryId])

  const handleChange = (event) => {
    const value = event.target.value
    const productsFiltradosPorInput = productJson.filter(product => product.title.toLowerCase().includes(value.toLowerCase()))
    setProducts(productsFiltradosPorInput)
  }
  
  const handleCloseAd = (event) => {
 
    setAdVisibility(false)
    //activar o desactivar el anuncio depende del true/false
  }

  console.log(products)

  return (
    <div >
        <input onChange={handleChange} placeholder='Buscar Productos'></input>
        <ItemList productos={products}/>
        {
          adVisibility === true
          ?
          <Ad className= 'ad'>
            <h3>El acceso a nuestro sitio web y sus contenidos es totalmente gratuito, por lo que los anuncios y los ingresos publicitarios resultan esenciales para seguir ofreciendo contenidos de calidad. El uso de bloqueadores además puede afectar a elementos multimedia y otras funcionalidades de nuestro sitio web.</h3>
            <button className ='boton' onClick = {handleCloseAd}> Aceptar </button>
          </Ad>
          :
          null
        }
    </div>
  )

}

export default ItemListContainer