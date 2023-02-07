import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
//import productJson from '../../data/products.json';
import "./styles.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();

  //Este effect se ejecuta cuando se monta el componente
  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data: ", docSnap.data());
        const productDetail = {
          id: docSnap.id,
          ...docSnap.data(),
        };
        setDetail(productDetail);
      } else {
        console.log("No such document!");
      }
    };
    getProduct();

    //!CASO JSON propio, considero apropiado dejarlo en caso de que no se pueda utilizar firebase
    // const getProductDetail = () => {

    //   const obtenerProducto = new Promise((res, rej) => {
    //     setTimeout(()=> {
    //       res(productJson)
    //     }, 3000)
    //   })

    //   obtenerProducto
    //   .then( productos => {
    //     if (id) {
    //       const detalleProducto = productos.find(producto => producto.id.toString() === id)
    //       console.log(detalleProducto)
    //       setDetail(detalleProducto)
    //     }
    //   })
    //   .catch(error => console.log(error))
    // }

    // getProductDetail()
  }, [id]);

  return (
    //En return no se puede colocar if, solamente operadores ernarios por que el if no necesariamente me devuelve algo, los ternarios siempre me devuelven algo en base a una condición
    <div>
      {Object.keys(detail).length === 0 ? (
        <h2 className="carga">Cargando producto...</h2>
      ) : (
        <ItemDetail detail={detail} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
