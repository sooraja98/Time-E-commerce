import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import watch1 from '../../images/watch1.jpg';
import watch2 from '../../images/watch2.jpg';
import watch3 from '../../images/watch3.jpg';
import watch4 from '../../images/watch4.jpg';
import watch5 from '../../images/watch5.jpg';
import watch6 from '../../images/watch6.jpg';

// Define an array of items to be displayed in the carousel
const items = [
  { id: 1, name: 'ROLEX', price: '$11199', image: watch1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, name: 'PATECH PHILIP', price: '$13149', image: watch2, description: 'Sed do eiusmod tempor incididunt ut labore et dolore m.' },
  { id: 2, name: 'RAYMOD', price: '$11249', image: watch3, description: 'Sed do eiusmod tempor incididunt ut labore et dolore m.' },
  { id: 3, name: 'CARTER', price: '$13199', image: watch4, description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
  { id: 3, name: 'RADO', price: '$13199', image: watch5, description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
  { id: 3, name: 'TOMMY', price: '$13199', image: watch6, description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
  // Add more items as needed
];

// Define responsive settings for the carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const FeaturedCollection = () => {
  return (
    <>
      <div className=''>
        <h1 className='md:text-4xl text-xl md:text-start font-most-purchace pt-4 md:ml-4 '>FEATURED COLLECTION</h1>
        <div className="hidden md:block border-t-4 border-black w-2/5 my-4 ml-4 "></div>
        <div className="flex justify-center ">
          <div className="md:hidden border-t-4 border-black w-2/4 my-4 "></div>
        </div>
      </div>
      <div>
        {/* Carousel component for displaying featured items */}
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          arrows={true}
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="my-carousel"
          const dotListClass = "my-carousel-dots" // This line seems to be incomplete
          draggable
          focusOnSelect={true}
          infinite
          itemClass="my-carousel-item"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          showDots={true}
          sliderClass="my-carousel-slider"
          slidesToSlide={5}
          swipeable
          className='md:ml-20'
        >
          {/* Map over the items array to render each item in the carousel */}
          {items.map((item) => (
            <div key={item.id} className="p-4">
              <div className="bg-white p-4 sho">
                <img src={item.image} alt="Product Image" className="h-80 w-full md:h-64 md:w-full" />
                <h3 className="text-lg text-center font-semibold mt-2">{item.name}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default FeaturedCollection;
