import { useParams } from "react-router-dom";
import styles from "../../styles/SeeProducts.module.css"
import { SAMPLEDATA } from "../../utils/Data.jsx"
import { IoCartOutline } from "react-icons/io5";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { useRef } from "react";
import { MdOutlineWhatsapp } from "react-icons/md";




 function SeeProducts(){

  const { id } = useParams();
       console.log( "id recibido desde la url",id )
  const product = SAMPLEDATA.find((item) => item.id === id)

  const cantidadPixeles = 300
  const carouselRef = useRef(null)

  const scrollingRef = () =>{
    if(carouselRef.current){
     carouselRef.current.scrollLeft   -= cantidadPixeles
    }
  }

  const scrollingRefLeft = () =>{
    if(carouselRef.current){
      carouselRef.current.scrollLeft  += cantidadPixeles
    }
  }

  if(!product){
    return <p>Producto no encontrado</p>
  }
    return(

       <section className={styles.Container}>
        <div className={styles.ProductContent}>
         <ul className={styles.carousel}>
         <div className={styles.img1}></div>
           <div className={styles.img1}></div>
             <div className={styles.img1}></div>
               <div className={styles.img1}></div>
         </ul>
       <div className={styles.container2}>
         { product.imagenes.map((img,index)=>(   
          <img
           className={styles.imagen}
             key={index}
             src={ img } 
             alt={`${product.nombreProducto} ${index + 1}`}
          />
         ))}
       </div>

         <div className={styles.TextContainer}>
              <p>{product.nombreProducto}</p>
               <p>{product.precio}</p>
              <p style={{backgroundColor:product.color}} className={styles.Colores}></p>
               <p>talla:  {product.talla}</p>
               <p>descripcion del producto</p>
               <div className={styles.boton}><IoCartOutline className={styles.Icono}/>Agregar al carrito</div>
               <div className={styles.Boton2}> <MdOutlineWhatsapp className={styles.Icono}/>Contactate con un asesor</div>
         </div>
         </div>
     
          <section className={styles.twosection}>
         <div className={styles.wrapper}>
                <p className={styles.Titulo}>Productos similares</p>
             <HiChevronLeft onClick={scrollingRef} className={styles.izquierda}/>

                <div className={styles.Mini} ref={carouselRef}>
                <div className={styles.card}>
                  <img className={styles.ImagenesSol}/>
                  <div className={styles.TextContent}>
                    <p>nombre producto</p>
                    <p>precio</p>
                    <p>talla</p>
                    <p>color</p>
                    <p>carrito</p>
                  </div>
                </div>
              <div className={styles.card}>
                  <img className={styles.ImagenesSol}/>
                  <div className={styles.TextContent}>
                    <p>nombre producto</p>
                    <p>precio</p>
                    <p>talla</p>
                    <p>color</p>
                    <p>carrito</p>
                  </div>
                </div><div className={styles.card}>
                  <img className={styles.ImagenesSol}/>
                  <div className={styles.TextContent}>
                    <p>nombre producto</p>
                    <p>precio</p>
                    <p>talla</p>
                    <p>color</p>
                    <p>carrito</p>
                  </div>
                </div><div className={styles.card}>
                  <img className={styles.ImagenesSol}/>
                  <div className={styles.TextContent}>
                    <p>nombre producto</p>
                    <p>precio</p>
                    <p>talla</p>
                    <p>color</p>
                    <p>carrito</p>
                  </div>
                </div><div className={styles.card}>
                  <img className={styles.ImagenesSol}/>
                  <div className={styles.TextContent}>
                    <p>nombre producto</p>
                    <p>precio</p>
                    <p>talla</p>
                    <p>color</p>
                    <p>carrito</p>
                  </div>
                </div><div className={styles.card}>
                  <img className={styles.ImagenesSol}/>
                  <div className={styles.TextContent}>
                    <p>nombre producto</p>
                    <p>precio</p>
                    <p>talla</p>
                    <p>color</p>
                    <p>carrito</p>
                  </div>
                </div>
                </div>

        
            <HiChevronRight onClick={scrollingRefLeft} className={styles.derecha}/>
      
         </div>
                  </section>

         <div>
         
         </div>
       </section>
    )
}


export default SeeProducts;

