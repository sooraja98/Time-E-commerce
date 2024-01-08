/**
 * This component renders a slider with custom prev and next arrows.
 */

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types'; // Import PropTypes

const CustomPrevArrow = (props) => (
  <button
    className="slick-custom-arrow slick-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
    onClick={props.onClick}
  >
    Previous
  </button>
);

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired, // Ensure onClick is a required function prop
};

const CustomNextArrow = (props) => (
  <button
    className="slick-custom-arrow slick-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
    onClick={props.onClick}
  >
    Next
  </button>
);

CustomNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired, // Ensure onClick is a required function prop
};

const Banner = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div>
          {/* Your video slide content here */}
          <video
            src="https://watchbox-sfcc.imgix.net/home/home-hero-banner/hot-indies/HP-Homepage-final.webm"
            autoPlay
            loop
            muted
            className="w-full "
          />
        </div>
        <div>
          {/* Your video slide content here */}
          <video
            src="https://watchbox-sfcc.imgix.net/home/home-hero-banner/hot-indies/HP-Homepage-final.webm"
            autoPlay
            loop
            muted
            className="w-full"
          />
        </div>
        {/* Add more video slides here */}
      </Slider>
    </div>
  );
};

export default Banner;