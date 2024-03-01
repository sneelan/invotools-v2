import React  from 'react';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default () => {
    function CustomNextArrow(props) {
        const { onClick } = props;return (<div className="neelan-next neelan-arrow" onClick={onClick}><img src="/img/website/btn-next-dark.svg" alt="Next" width='30px' /></div>);
      }
      function CustomPrevArrow(props) {
        const { onClick } = props;return (<div className="neelan-prev neelan-arrow" onClick={onClick}><img src="/img/website/btn-prev-dark.svg" alt="Next" width='30px' /></div>);
      }
    const settings = {
        dots: true,
        //fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        cssEase: "linear",
        nextArrow:<CustomNextArrow />,
        prevArrow:<CustomPrevArrow />,
      };

return (
  <>       
    <div className="slider-container text-center overflow-hidden  neel-slider neel-slider-sm bg-white">
      <Slider {...settings}>
        <div><img src="/img/website/hero-banner-1.png" className='img-fluid d-block m-auto' /></div>
        <div><img src="/img/website/hero-banner-3.png" className='img-fluid d-block m-auto' /></div>
        <div><img src="/img/website/hero-banner-4.png" className='img-fluid d-block m-auto' /></div>
        <div><img src="/img/website/hero-banner-2.png" className='img-fluid d-block m-auto' /></div>
      </Slider>
    </div>
  </>
    );
};