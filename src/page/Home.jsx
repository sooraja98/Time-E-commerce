import NavBar from "../components/navbar/NavBar"
import Banner from '../components/banner/Banner'
import SecondBanner from '../components/seondbanner/SecondBanner'
import ProductCarouselLandingPage from '../components/landingpageCard/LandingpageCard'
import ThirdBanner from '../components/thirdBanner/ThirdBanner'
import FeaturedCollection from "../components/featured-collection/FeaturedCollection"
import Footer from '../components/footer/Footer'
const Home=()=>{
    return(
        <div>
            <NavBar/>
            <Banner/>
            <SecondBanner/>
            <ProductCarouselLandingPage/>
            <ThirdBanner/>
            <FeaturedCollection/>
            <Footer/>
        </div>
    )
}

export default Home