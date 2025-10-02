import PantalonPrincipal from "../public/imgs/pantalonPrincipal.jpg"
import principalChaqueta from "../public/imgs/PrincipalChaqueta.jpg"
import principalGorra from "../public/imgs/gorraPrincipal.jpg"
import principalCamisa from "../public/imgs/producto20.jpg"
import producto1 from "../public/imgs/producto1.jpg"
import Producto1Atras from "../public/imgs/Producto1Atras.jpg" 
import producto2 from "../public/imgs/producto2.jpg"
import producto2Atras from "../public/imgs/producto2Atras.jpg"
import producto3 from "../public/imgs/producto3.jpg"
import producto3Atras from "../public/imgs/producto3Atras.jpg"
import producto4 from "../public/imgs/producto4.jpg"
import producto4Atras from "../public/imgs/producto4Atras.jpg"
import prodcuto5 from "../public/imgs/producto5.jpg"
import producto5Atras from "../public/imgs/producto5Atras.jpg"
import producto6 from "../public/imgs/producto6.jpg"
import producto6Atras from "../public/imgs/producto6Atras.jpg"
import producto7 from "../public/imgs/producto7.jpg"
import producto8 from "../public/imgs/producto8.jpg"
import producto9 from "../public/imgs/producto9.jpg"
import producto10 from "../public/imgs/producto10.jpg"





export const CATEGORIESDATA = [

{  id:"1",
   imagen:principalCamisa,
   texto:"camisetas y camisas"
},
{  id:"2",
   imagen:PantalonPrincipal,
   texto:"pantalones y sudaderas"
},
{  id:"3",
   imagen:principalChaqueta,
   texto:"buzos y chaquetas"
},
{  id:"4",
   imagen:principalGorra,
   texto:"gorras y accesorios"
},

]




export const SAMPLEDATA = [
    {
        id:"1",
    imagenes:[
    producto1,Producto1Atras],
    nombreProducto:"Camisa unisex", 
    precio:"$35.000 COP",
    talla:"s",
    color:"#335250"
     },

    {
        id:"2",
        imagenes:[
         producto2,producto2Atras
        ],
        nombreProducto:"Camisa Kalash", 
        precio:"$40.000 COP",
        talla:"m",
        color:"#6a2729"
    
    },

    {    id:"3",
        imagenes:[
            producto3,
            producto3Atras
        ],
        nombreProducto:"Camisa Kalash",
         precio:"$50.000 COP",
         talla:"m",
         color:"#665245"},

    {
        id:"4",
        imagenes:[
         producto4,
         producto4Atras
        ],
        nombreProducto:"Camisa Kalash", precio:"$60.000 COP",talla:"xl",color:"#b5a4a4ff"},


    {
        id:"5",
        imagenes:[
          prodcuto5,producto5Atras
        ],

        nombreProducto:"Camisa Kalash", precio:"$70.000 COP",talla:"xl",color:"#7d7b6a"},



    {  id:"6",
        imagenes:[
          producto6,producto6Atras
        ],

        nombreProducto:"Camisa Kalash", precio:"$80.000 COP",talla:"xl", color:"#000000ff"},
]




export const PRODUCTSDATA = [
    {id:"1",imagenes:[producto7],nombreProducto:"Camisa Terra",talla:"s",color:"#3c3c3c"},

    {id:"2",imagenes:[producto8],nombreProducto:"Camisa Terra",talla:"s", color:"#c8b89f"},
    
    {id:"3", imagenes:[producto9],nombreProducto:"Camisa Terra",talla:"s",color:"#f28d30"},
       
    {id:"4" , imagenes:[producto10],nombreProducto:"Camisa Terra", talla:"s", color:"#c32626"},
]


