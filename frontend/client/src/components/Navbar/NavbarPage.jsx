import styles from "../../styles/Navbar.module.css";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { useAuthContext } from "../../contexts/AuthContext";
import { IoMdClose } from "react-icons/io";
import imgLogo from "../../public/imgs/logoSep.png"

function Navbar(){

  const {MenuToogle,setOpen,open} = useAuthContext()


    return(

       <header>
    <nav className={styles.navbar}>

            
              
         <img className={styles.logo} src={imgLogo}/>
    
          

    
        <ul className={styles.izquierda}>
            <li><a>Nuevo</a></li>
           <li><a>Hombre</a></li>
            <li><a>Mujer</a></li>
            <li><a>unisex</a></li>
             <li><a>Accesorios</a></li>

           </ul>  
         
       <ul className={styles.menuDerecha}>
       <li><a><FaRegUser /></a></li>
         <li><a><IoSearch /></a></li>
          <li><a><LuShoppingCart /></a></li>
       </ul>
       <div className={styles.MenuIcono} onClick={MenuToogle}><IoMenu/></div>
       <ul className={`${styles.MenuResponsive} ${open ? styles.Active : ""}`}>
         <div className={styles.IconClose}><IoMdClose onClick={MenuToogle}/></div>
       <li><a>Nuevo</a></li>
        <li><a>Ofertas</a></li>
         <li><a>Hombre</a></li>
          <li><a>Mujer</a></li>
          <li><a>Iniciar sesion</a></li>
          <li><a>Buscar</a></li>
           <li><a>Carrito de compras</a></li>
       </ul>
    </nav>
    </header>
    )
}

export default Navbar