import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ad from "../../components/Ad";
import ItemList from "../../components/ItemList";

import { db } from "../../firebase/config";
import "./styles.css";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [adVisibility, setAdVisibility] = useState(true);

  //Lo primero es capturar la categoría que quiero filtrar
  const { categoryId } = useParams();
  console.log(categoryId);

  //Se ejecuta este efecto cuando se monta componente
  useEffect(() => {
    
    //!Esta porción de código corresponde a la implementación de FireBase

    const getProducts = async () => {
      let querySnapshot;
      if (categoryId) {
        const q = query(
          collection(db, "products"),
          where("category", "==", categoryId)
        );
        querySnapshot = await getDocs(q);
      } else {
        querySnapshot = await getDocs(collection(db, "products"));
      }

      const productosFirebase = [];

      querySnapshot.forEach((doc) => {
        const product = {
          id: doc.id,
          ...doc.data(),
        };
        productosFirebase.push(product);
      });
      setProducts(productosFirebase);
    };
    getProducts();

    //!Para cerrar con escape el Ad

    const handleEsc = (event) => {
      console.log(event); //evento que es nativo del navegador

      if (event.keyCode === 27) {
        console.log("se cierra");
        setAdVisibility(false);
        window.removeEventListener("keydown", handleEsc);
      }
    };

    window.addEventListener("keydown", handleEsc);
  }, [categoryId]);



  const handleCloseAd = (event) => {
    setAdVisibility(false);
    //activar o desactivar el anuncio depende del true/false
  };

  console.log(products);

  return (
    <div>
      
      <ItemList productos={products} />
      {adVisibility === true ? (
        <Ad className="ad">
          <h3>
            El acceso a nuestro sitio web y sus contenidos es totalmente
            gratuito, por lo que los anuncios y los ingresos publicitarios
            resultan esenciales para seguir ofreciendo contenidos de calidad. El
            uso de bloqueadores además puede afectar a elementos multimedia y
            otras funcionalidades de nuestro sitio web.
          </h3>
          <button className="boton" onClick={handleCloseAd}>
            {" "}
            Aceptar{" "}
          </button>
        </Ad>
      ) : null}
    </div>
  );
};

export default ItemListContainer;
