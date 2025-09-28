import styles from "../../styles/Footer.module.css"
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { FaRegClock } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";


function FooterPage(){

    return(

        <footer className={styles.Container}>
            <div>
           <p> <LiaMapMarkerAltSolid /> Dirección física</p>
            </div>  
            <div>
            <p> <FaRegClock /> Horarios de atención.</p>
            </div>
            <div>
               <p> <FaRegEnvelope /> Correo de soporte</p>
            </div>
        </footer>
    )
}

export default FooterPage