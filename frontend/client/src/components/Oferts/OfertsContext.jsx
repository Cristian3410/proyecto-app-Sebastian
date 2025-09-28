import styles from "../../styles/Oferts.module.css"
import { useRef, useState } from "react"
import { SAMPLEDATA } from "../../utils/Data.jsx"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function NewPage() {
  const cantidadPixeles = 300
  const miniCantidad = 400

  const carouselRef = useRef(null)
  const miniRef = useRef([])

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/producto/${id}`)
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= cantidadPixeles
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += cantidadPixeles
    }
  }

  const scrollMiniLeft = (i) => {
    if (miniRef.current[i]) {
      miniRef.current[i].scrollLeft -= miniCantidad
    }
  }

  const scrollMiniRight = (i) => {
    if (miniRef.current[i]) {
      miniRef.current[i].scrollLeft += miniCantidad
    }
  }

  return (
    <section className={styles.body} id="oferts">
      <div className={styles.wrapper}>
          <h2 className={styles.title}>Nuevo</h2>
        <HiChevronLeft className={styles.Izquierda} onClick={scrollLeft} />
        <ul className={styles.carousel} ref={carouselRef}>
          {SAMPLEDATA.map((item, i) => (
            <li className={styles.card} key={item.id} onClick={()=> handleClick(item.id)}>
              {item.imagenes && (
                <div className={styles.imgContainer}>
                  <HiChevronLeft
                    className={styles.izquierdaPequeño}
                    onClick={(e) =>{
                        
                       e.stopPropagation();
                      scrollMiniLeft(i);
                            
                    }}
                  />
                  <div
                    className={styles.CarruselSet}
                    ref={(el) => (miniRef.current[i] = el)}
                  >
                    {item.imagenes.map((img, index) => (
                      <img
                        key={index}
                        className={styles.imagen}
                        src={img}
                        alt={`Imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                  <HiChevronRight
                    className={styles.Derechapequeño}
                    onClick={(e) =>
                      {     e.stopPropagation()
                            scrollMiniRight(i)
                      }}
                  />
                </div>
              )}
              <div className={styles.Textcontainer}>
               <h3>{item.nombreProducto}</h3>
              <p>{item.precio}</p>
              <p>{item.talla}</p>
             <div className={styles.colorBox} style={{backgroundColor:item.color}}></div>
              <p><IoCartOutline className={styles.IconCar} /></p>
              </div>

            </li>
          ))}
        </ul>
        <HiChevronRight className={styles.Derecha} onClick={scrollRight} />
      </div>
    </section>
  )
}

export default NewPage
