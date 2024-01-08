import  { useState } from 'react';
import ProductCard from '../cardDesign/Card';
import watch1 from '../../images/watch1.jpg'
import watch3 from '../../images/watch3.jpg'
import watch6 from '../../images/watch6.jpg'

function ProductListing() {
  const products = [
    {
      id: 1,
      name: 'ROLEX 324',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam laudantium hic!',
      seller: 'ROLEX',
      model: '324',
      price: 19832,
      image: watch1, // Replace with the actual image path
    },
    {
      id: 2,
      name: 'REYMOD 123',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore m.',
      seller: 'REYMOD',
      model: '123',
      price: 14999,
      image: watch3, // Replace with the actual image path
    },
    {
        id: 3,
        name: 'ROLEX 123',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore m.',
        seller: 'REYMOD',
        model: '123',
        price: 44999,
        image: watch6, // Replace with the actual image path
      },
    // Add more products as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Calculate the start and end indexes for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, products.length);

  // Slice the products array to get products for the current page
  const displayedProducts = products.slice(startIndex, endIndex);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gray-200 min-h-screen p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-96 gap-10">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap justify-center">
          {currentPage > 1 && (
            <button
              className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full mr-2"
              onClick={() => handlePageClick(currentPage - 1)}
            >
              Previous
            </button>
          )}
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index + 1}
              className={`${
                currentPage === index + 1
                  ? "bg-black text-white font-bold"
                  : "bg-white text-gray-700"
              } font-semibold px-4 py-2 rounded-full mx-2 mt-2 sm:mt-0`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full ml-2"
              onClick={()=>handlePageClick(currentPage + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
