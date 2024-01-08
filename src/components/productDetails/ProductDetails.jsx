import {useState} from 'react';
import watch4 from '../../images/watch4.jpg'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom';

function ProductView() {

    const [wishlistCount, setWishlistCount] = useState(1);


    const incrementWishlist = () => {
        setWishlistCount(wishlistCount + 1);
    };

    const decrementWishlist = () => {
        if (wishlistCount <= 1) {
            setWishlistCount(1);
        } else {
            setWishlistCount(wishlistCount - 1);
        }
    };

    return (
        <div className="max-h-screen mt-10">

            <>
                <h1 className="text-4xl md:text-4xl text-black font-serif mb-14">PRODUCT DETAILS</h1>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2">
                        <img src={watch4}
                            alt=""
                            className="object-fill h-96 w-full rounded-lg hover:shadow-lg"/>
                    </div>
                    <div className="lg:w-1/2 mt-4 lg:mt-0 lg:ml-8">
                        <h2 className="text-3xl text-gray-800 font-semibold">
                            ROLEX 324</h2>
                        <div className="flex items-center text-gray-600 text-lg mb-4 pt-2 md:pl-44 pl-20">
                            <span className="mr-2  ">Description: </span>
                            <span className="text-blue-600 font-semibold">
                              consectetur adipisicing</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-lg mb-4 pt-2 md:pl-44 pl-20">
                            <span className="mr-2">Seller:</span>
                            <span className="text-blue-600 font-semibold">
                                ROLEX </span>
                        </div>
                        <div className="flex items-center text-gray-600 text-lg mb-4 pt-2 md:pl-44 pl-20">
                            <span className="mr-2">Model:</span>
                            <span className="text-blue-600 font-semibold">
                                324 </span>
                        </div>
                        <p className="text-2xl text-blue-600 font-bold">
                            Total Price: ${
                            19832 * wishlistCount
                        }</p>
                        <div className="flex items-center mt-6 md:pl-40 pl-10 space-x-4">

                            <div className="flex items-center space-x-2">
                                {
                                wishlistCount > 1 && (
                                    <button onClick={decrementWishlist}
                                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-3 rounded-full focus:outline-none">
                                        -
                                    </button>
                                )
                            }
                                <span className="text-xl text-black font-semibold">
                                    {wishlistCount}</span>
                                <button onClick={incrementWishlist}
                                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded-full focus:outline-none">
                                    +
                                </button>
                                <Link to="/cart">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full focus:outline-none" onClick="">
                                    Add to cart
                                </button>
                                </Link>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <Footer/>

        </div>
    );
}

export default ProductView;
