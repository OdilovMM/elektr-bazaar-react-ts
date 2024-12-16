import Cart from './Cart';
import HomeBanner from './HomeBanner';
import HomeBannerAdvertisement from './HomeBannerAdvertisement';

const Home = () => {
  return (
    <div className="w-[90%] mx-auto mb-5">
      {/* <HomeBanner /> */}
      <div className="max-w-full ">
        <HomeBanner />
      </div>
      <div className="w-full my-4">
        <HomeBannerAdvertisement />
      </div>
      <div className="w-full items-center justify-between flex flex-wrap gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((g, ind) => (
          <Cart key={ind} />
        ))}
      </div>
      <div className="w-full my-4">
        <HomeBannerAdvertisement />
      </div>
      <div className="w-full my-4">
        <p>Sub Categories lists</p>
      </div>
      <div className="w-full items-center justify-between flex flex-wrap gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((g, ind) => (
          <Cart key={ind} />
        ))}
      </div>
      {/* product section */}
    </div>
  );
};

export default Home;
