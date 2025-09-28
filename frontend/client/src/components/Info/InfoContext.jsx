import styles from "../../styles/Info.module.css"
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { BsBox2 } from "react-icons/bs";
import { LiaPhoneAltSolid } from "react-icons/lia";
import { TbContract } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa";



function InfoPage(){

    return(

        <footer className={styles.ContainerPrincipal}>
              <div className={styles.social}>
                <p>Siganos</p>

                <a
                href="https://www.instagram.com/social.urbanshop/"
                    target="_blank" 
                      rel="noopener noreferrer"
                
                >
                      <IoLogoInstagram/>
                </a>


                <a
                      href="https://www.facebook.com/people/Social-Urban-Shop/100090364819094/?mibextid=LQQJ4d"
                      target="blank"
                      rel="noopener noreferrer"
                >

                           <FaFacebook />
                </a>
                   <a
                   href="https://wa.me/573212226032"
                      target="_blank" 
                      rel="noopener noreferrer"
                   
                   >
                     <MdOutlineWhatsapp/>
                   </a>

              </div>

             <div className={styles.Box3}>
                 <p className={styles.info}><IoPricetagsOutline className={styles.icono}/>Sobre la marca<FaAngleRight className={styles.link} /></p>
                 <p className={styles.info}><BsBox2  className={styles.icono} />Compras / pedidos<FaAngleRight className={styles.link} /></p>
                 <p className={styles.info}><LiaPhoneAltSolid   className={styles.icono}/>Soporte / Contacto<FaAngleRight className={styles.linkabajo} /></p>
                 <p className={styles.info}><TbContract  className={styles.icono} />Términos y condiciones<FaAngleRight className={styles.linkabajo}/></p>
             </div>

        </footer>

    )
}

export default InfoPage;