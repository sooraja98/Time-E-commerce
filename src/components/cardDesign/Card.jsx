/**
 * This component renders a product card with a name, price, description, and image.
 *
 * @param {string} name The name of the product.
 * @param {number} price The price of the product.
 * @param {string} description The description of the product.
 * @param {string} image The URL of the product image.
 */

import { Link } from 'react-router-dom';

function ProductCard({ name, price, description, image }) {
  return (
    <div className="md:relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border l-">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {name}
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            ${price}
          </p>
        </div>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          {description}
        </p>
        <div className="p-6 pt-0">
          <Link to="/cart">
            <button
              className="block w-full hover:bg-blue-100 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;