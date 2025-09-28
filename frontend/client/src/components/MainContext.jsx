import HomePage from "./Home/HomePage"
import NewPage from "./Oferts/OfertsContext"
import ProductsPage from "./products/ProductsContext"


function MainContext(){

    return(
      
        <>
        <HomePage/>
           <ProductsPage/>
        <NewPage/>
        </>

    )
}


export default MainContext