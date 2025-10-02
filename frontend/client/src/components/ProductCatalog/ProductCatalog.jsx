import styles from "../../styles/ProductCatalog.module.css"
import { FaPlus } from "react-icons/fa";
import { dataProducts } from "../../utils/DataProducts.jsx";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { useRef ,useState} from "react";
import { IoCartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { CATEGORIESDATA } from "../../utils/Data.jsx";


function ProductCatalog(){

  const {tipo} = useParams();

  const mapCategoria ={
   
    "camisetas y camisas":["camisa"],
    "pantalones y sudaderas":["pantalon","pantalonCorto","sudadera"],
    "buzos y chaquetas":["buzo","chaqueta"],
    "gorras y accesorios":["gorra","accesorios"]

  }

  const productosFiltrados = dataProducts.filter((item) =>
   
    mapCategoria[tipo]?.includes(item.categoria)  

)



  
const carrouselRefs = useRef([]);

const [showSize,setShowSize] = useState(
  dataProducts.map( () => false)
)


const toggleSizes = (id) =>{
  setShowSize((prev)=>
  prev.map((val,idx)=> (idx === id ? !val : val))
  )
}



const onClickLeft = (id) => {
  if(carrouselRefs.current[id]){
    carrouselRefs.current[id].scrollLeft -= carrouselRefs.current[id].offsetWidth;
  }
}

const onclickRigth = (id) => {
   if (carrouselRefs.current[id]) {
    carrouselRefs.current[id].scrollLeft += carrouselRefs.current[id].offsetWidth;
  }
}
   
 
return(

    <section className={styles.body}>
        <p className={styles.Titulo}>catalogo de productos</p>
        <div className={styles.cardContainer}>
          {productosFiltrados.map((producto,id)=>(
             <div className={styles.card} key={id}>
                 { producto.foto.length > 1 && (
      
              <HiChevronLeft className={styles.CarruselLeft} onClick={() => onClickLeft(id)} />
   
            )}
              <div className={styles.imgContainer} ref={(el) => carrouselRefs.current[id] = el}>
                {producto.foto.map((img,index) =>(
               
                  <img key={index} src={img} className={styles.imagenProducto}/>

                ))}
              </div>
            <div className={styles.Text}>
            <p>{producto.nombre}</p>
               <div className={styles.colorBox} style={{backgroundColor:producto.color}}></div>
              <p>{producto.precio}</p>
              <IoCartOutline className={styles.iconoCarro}/>
            </div>
            {producto.foto.length > 1 &&(

          <HiChevronRight className={styles.carruselRight} onClick={() => onclickRigth(id)} />
            )}
           </div>
          ))}
          </div>  
    </section>
)
    
}



export default ProductCatalog