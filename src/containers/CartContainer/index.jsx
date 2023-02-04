import React, { useContext, useState } from 'react'    //useState correspondia al formulario
import TableRow from './TableRow'
import { Shop} from '../../context/ShopProvider'
import '../CartContainer/styles.css'
import generateOrderObject from '../../services/generateOrderObject'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase/config"; 
import { doc, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom'
import FormComp from '../../components/Form'


const Cart = () => {

  const {products, total, cleanCart} = useContext(Shop);

  const [formVis, setFormVis] = useState(false);

  const [loader, setLoader] = useState(false);

  

  const confirmPurchase = async (dataDelFormulario) => {
    const {phone: telefono, nombre, email} = dataDelFormulario
    try {
      
      setLoader(true);
  
      const order = generateOrderObject ({
        //esto recibe un objeto con varias propiedades de un modal o un formulario de compra que el profe no hizo pero dejo harcodeado
        nombre,
        email,
        telefono,
        cart : products, 
        total : total() 
      })
  
      // setFormVis(true);
  
      
  
      //Almacenar la order en firebase y con el ID autogenerado por firebase, mostramos un alert para confirmar la compra 
  
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "orders"), order);
      cleanCart()
      // luego actualizar el stock de los productos existentes

      for (const productCart of products) {

        const productRef = doc(db, "products", productCart.id);

        // Set the "capital" field of the city 'DC'
        await updateDoc(productRef, {
          stock: productCart.stock - productCart.quantity
        });
      }

      alert("ORDEN CONFIRMADA CON ID: " + docRef.id); 
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
      setFormVis(false);
    }




  }

  return (
    <>
    {
      products.length !==0 ?

      <>
        <table className="table table-danger table-success table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Código</th> 
              <th scope="col">Imagen</th>
              <th scope="col">Título</th>
              <th scope="col">Precio Unitario</th>
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
        {
          loader ?
          <h2>Cargando...</h2>
          :
          <button onClick={() => setFormVis(true)} className="" >Confirmar Compra</button>
        }
      </>
      :
      <>
      <h1>No hay productos en el carrito</h1>
      <button>
        <Link to = "/">Ir a inicio</Link>
      </button>
      </>
    }

      {/*! formulario al confirmar compra */}

      { formVis ?
        <FormComp
          confirmPurchase = {confirmPurchase}
          setFormVis = {setFormVis}
          formVis = {formVis}
        />
        : null

      }

    </>
  )
}

export default Cart  