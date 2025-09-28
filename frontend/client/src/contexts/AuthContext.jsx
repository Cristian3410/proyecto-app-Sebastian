import {createContext,useState,useContext}  from "react"

export const AuthContext = createContext();

export const useAuthContext = () => {

    const context = useContext(AuthContext);
    if(!context){
        throw new Error("el useAuthContext deberia estar dentro de un AuthProvider")
    }
    return context;
}

export const AuthProvider =({children})=>{

     
    const[cart,setCart] = useState([])
    const [open,setOpen] = useState(false)

    const addTocart =  (product) => {
    setCart((prev) => [...prev,product])
    }

       const MenuToogle = () =>{
      setOpen(!open)
    }
        


    return(
       <AuthContext.Provider value ={{
        MenuToogle,
        cart,
        addTocart,
        setOpen,
        open,
       }} >
        {children}
       </AuthContext.Provider>
    )
}