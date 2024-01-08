import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import watch1 from '../../images/watch1.jpg'
import watch2 from '../../images/watch2.jpg'
import watch3 from '../../images/watch3.jpg'
import watch4 from '../../images/watch4.jpg'
import watch7 from '../../images/watch7.png'
import watch8 from '../../images/watch8.jpg'
import { Link } from 'react-router-dom';

const items = [
  { id: 1, name: 'ROLEX', price: '$12919',image:watch1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, name: 'REYMOD', price: '$11149',image:watch2, description: 'Sed do eiusmod tempor incididunt ut labore et dolore m.' },
  { id: 3, name: 'PATECH PHILIP', price: '$32199',image:watch3, description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
  { id: 3, name: 'CATERIER', price: '$12199',image:watch4, description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
  { id: 3, name: 'TOMMY', price: '$19139',image:watch7, description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
  { id: 3, name: 'RADO', price: '$13199',image:watch8, description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
  // Add more items as needed
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const MultiItemCarousel = () => {
  return (
    <>
        <div className=''>
            <h1 className='md:text-4xl text-xl md:text-start  font-most-purchace pt-4 md:ml-4 '>MOST PURCHASED ITEMS</h1>
            <div className="hidden md:block border-t-4 border-black w-2/5 my-4 ml-4 "></div>
            <div className="flex justify-center ">
  <div className="md:hidden border-t-4 border-black w-2/4 my-4 "></div>
</div>
        </div>
        <div>
        <Carousel
  responsive={responsive}
  additionalTransfrom={0}
  arrows={true}
  autoPlaySpeed={3000}
  centerMode={false}
  containerClass="my-carousel"
  const dotListClass = "my-carousel-dots"
  draggable
  focusOnSelect={true}
  infinite
   itemClass = "my-carousel-item"
  keyBoardControl
  minimumTouchDrag={80}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  showDots={true}
  sliderClass = "my-carousel-slider"
    slidesToSlide={5}
  
  swipeable className='md:ml-20'
>
{items.map((item) => (
    <Link to={`/product/${item.id}`} key={item.id}>
      <div className="p-4">
        <div className="bg-white p-4">
          <img src={item.image} alt="Product Image" className="w-full h-44" />
          <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-blue-500 font-semibold mt-2">{item.price}</p>
        </div>
      </div>
    </Link>
  ))}
</Carousel>
        </div>
    </>

  );
};

export default MultiItemCarousel;
