import React, { useContext, useState } from 'react'    //useState correspondia al formulario
import TableRow from './TableRow'
import { Shop} from '../../context/ShopProvider'
import '../CartContainer/styles.css'
import generateOrderObject from '../../services/generateOrderObject'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase/config"; 


const Cart = () => {

  const {products, total, cleanCart} = useContext(Shop);

  // const [formVis, setFormVis] = useState(false);

  const [loader, setLoader] = useState(false);

  

  const confirmPurchase = async () => {

    try {
      
      setLoader(true);
  
      const order = generateOrderObject ({
        //esto recibe un objeto con varias propiedades de un modal o un formulario de compra que el profe no hizo pero dejo harcodeado
        nombre : "Leo", 
        email : "leonardozacca@gmail.com", 
        telefono : "2616558886", 
        cart : products, 
        total : total() 
      })
  
      // setFormVis(true);
  
      console.log(order);
  
      //Almacenar la order en firebase y con el ID autogenerado por firebase, mostramos un alert para confirmar la compra 
  
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "orders"), order);
      cleanCart()
      // luego actualizar el stock de los productos existentes
      alert("ORDEN CONFIRMADA CON ID: " + docRef.id); 
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }




  }

  return (
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
        <button onClick={confirmPurchase} className="" >Confirmar Compra</button>
      }

      {/*! formulario al confirmar compra */}

      {/* { formVis ?
        <form>
          <input placeholder='Ingrese el nombre'/>
        </form>
        : null

      } */}

    </>
  )
}

//!RECORDAR HACER EL FORM AL FINAL DE CONFIRMAR COMPRA PARA LLENAR CON LOS DATOS DEL CLIENTE, ES NECESARIO PARA LA ENTREGA FINAL

export default Cart  