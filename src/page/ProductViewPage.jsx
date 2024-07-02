import { useEffect } from "react"
import NavBar from "../components/navbar/NavBar"
import ProductView from "../components/productDetails/ProductDetails"
import Footer from "../components/footer/Footer"

const ProductViewPage = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <div>
        <NavBar/>
        <ProductView/>
        <Footer/>
    </div>
  )
}

export default ProductViewPage
