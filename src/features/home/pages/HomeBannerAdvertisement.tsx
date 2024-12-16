import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderImg from '../../../assets/slider.png';

export default function HomeBannerAdvertisement() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {[1, 2, 3, 4, 5].map((g, ind) => (
        <div
          key={ind}
          className="relative w-full max-h-[120px] rounded-md overflow-hidden"
        >
          <img
            src={sliderImg}
            className="h-full w-full object-center"
            alt={`Slider Image ${ind + 1}`}
          />
        </div>
      ))}
    </Slider>
  );
}
