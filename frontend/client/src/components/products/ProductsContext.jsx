import styles from "../../styles/Products.module.css"
import {CATEGORIESDATA} from "../../utils/Data.jsx"
import { useNavigate } from "react-router-dom"


function ProductsPage(){

  const navigate = useNavigate()

  const handleCategoryClick = (categoria) => {
    navigate(`/categoria/${categoria}`)
  }  


    return(


        <section className={styles.container}>
            <div className={styles.ContainerCard}>
              { CATEGORIESDATA.map((item,id)=>(                
                 <div key={item.id} className={styles.card}
                 onClick={() => handleCategoryClick(item.texto)}
                 >
                    <img src={item.imagen} className={item.id === "2" || item.id ==="3" ? styles.containImg : ""}
                    
                    />
                    <div className={styles.overlay}>
                      <p>{item.texto}</p>
                    </div>
                 </div>
              ))}
            </div>
            <div className={styles.ContainerOne}>
           
             
            </div>
              
        </section>
    )
}


export default ProductsPage;