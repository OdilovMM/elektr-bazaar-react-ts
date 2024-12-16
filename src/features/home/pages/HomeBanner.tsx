import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderImg from '../../../assets/slider.png';

const HomeBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };
  return (
    <div className="relative z-0">
      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map((g, ind) => (
          <div
            key={ind}
            className="w-full max-h-[480px] rounded-md overflow-hidden -z-0"
          >
            <img src={sliderImg} className="h-full w-full object-fit" alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeBanner;
