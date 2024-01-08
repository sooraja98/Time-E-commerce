import Footer from '../components/footer/Footer'; // Import the Footer component
import Navbar from '../components/navbar/NavBar'; // Import the Navbar component
import ProductListing from '../components/productlist/ProductList'; // Import the ProductListing component

const ProductListPage = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <ProductListing /> {/* Render the ProductListing component */}
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default ProductListPage;
