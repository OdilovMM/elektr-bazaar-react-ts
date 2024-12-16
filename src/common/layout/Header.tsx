import { Link } from 'react-router-dom';
import CustomButton from '../components/Button';
import SearchForm from '../components/SearchForm';
import React, { useState } from 'react';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BsBasket3 } from 'react-icons/bs';
import sublinks from '../utils/Navlinks'; // Adjust the path as needed
import { MdKeyboardArrowRight } from 'react-icons/md';

// top icons
import { TbTruckDelivery } from 'react-icons/tb';
import { GiReturnArrow } from 'react-icons/gi';
import { CiMobile3 } from 'react-icons/ci';

// like
import { BiSolidLike } from 'react-icons/bi';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaBoxOpen } from 'react-icons/fa';

const Header: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Search for item', query);
  };

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header className="w-full  pb-[15px]   relative z-50 border-b-[1px] border-[#e3e4e6] ">
      {/* upper notification */}
      <div className="bg-[#000000] ">
        <div className="text-[#E4DC95] flex w-[85%] mx-auto flex-row justify-between py-2">
          <div className="flex justify-center items-center gap-2">
            <TbTruckDelivery size={35} />
            <div>
              <p className="p-0 m-0">Free shipping on all orders</p>
              <span>Limited-time offer</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <GiReturnArrow size={35} />
            <div>
              <p className="p-0 m-0">Delivery guarantee</p>
              <span>Refund for any issues</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <CiMobile3 size={35} />
            <div>
              <p className="p-0 m-0"> Get the Our App</p>
              <span>Easy going with all</span>
            </div>
          </div>
        </div>
      </div>

      {/* navigation */}
      <div className="w-full  py-3">
        <div className="w-[85%] mx-auto flex-row px-4  flex items-center justify-between gap-2">
          {/* Logo */}
          <div className="flex-2/12 flex items-center">
            <Link to="/" className="flex items-center">
              <h1 className="text-lg font-bold text-orange-500 m-0">
                MarketUz
              </h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-3 hidden md:flex justify-center items-center">
            <ul className="flex space-x-6 text-sm text-gray-700 justify-center items-center m-0">
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-500 transition flex items-center justify-center gap-2"
                >
                  <BiSolidLike size={20} />
                  <span>Best Seller</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-500 transition flex items-center justify-center gap-2"
                >
                  <FaStarHalfAlt size={20} />
                  <span>5-Star Rated</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-500 transition flex items-center justify-center gap-2"
                >
                  <FaBoxOpen size={20} />
                  <span>New Year</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-orange-500 transition">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex-2 items-center space-x-4 relative">
            <CustomButton
              color="primary"
              variant="outlined"
              size="small"
              onClick={() => setOpenMenu(!openMenu)}
              className="hidden md:block"
            >
              Categories
            </CustomButton>

            {openMenu && (
              <div className="w-[350px] bg-white absolute top-[37px] right-[-100px] border-[1px] border-[#e3e4e6] rounded-b-sm z-[88888] rounded-md">
                <ul className="flex flex-col items-start w-full mb-0">
                  {sublinks.map((sublink) => (
                    <li
                      key={sublink.pageId}
                      className="relative uppercase w-full   cursor-pointer group"
                    >
                      <Link
                        to={`/${sublink.url}`}
                        className="text-slate-700 mx-2 py-[6px] capitalize px-3 hover:no-underline flex items-center justify-between"
                      >
                        {sublink.page}

                        {/* Show right arrow if sublinks exist */}
                        {sublink.links && (
                          <span className="ml-2 text-gray-400">
                            <MdKeyboardArrowRight color="black" size={25} />
                          </span>
                        )}
                      </Link>

                      {/* Subcategory dropdown */}
                      {sublink.links && (
                        <ul
                          className="absolute left-[347.5px] border-[1px] border-[#e3e4e6]  rounded-r-sm top-0 hidden group-hover:block bg-white"
                          style={{ width: 'inherit' }}
                        >
                          {sublink.links.map((link) => (
                            <li key={link.id} className="w-full py-1 mx-2">
                              <Link
                                to={link.url}
                                className="flex items-center w-full gap-2 px-3 py-[2px] text-slate-700 hover:no-underline capitalize"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Search Form */}
          <div className="flex flex-3/12 justify-center px-4">
            <SearchForm
              placeholder="Search products..."
              buttonText="Find"
              onSearch={handleSearch}
              className="w-full md:w-3/5"
            />
          </div>

          <div className="flex-2/12 gap-2 flex justify-around items-center flex-row">
            <CustomButton>
              <MdOutlineAccountCircle size={26} />
            </CustomButton>
            <p className="block p-0 m-0 items-center justify-center flex-row">
              <span>$</span>
              2.15
            </p>
            <div className="relative">
              <CustomButton>
                <BsBasket3 size={26} />
              </CustomButton>
              <span className="absolute text-white top-[-12px] right-[-10px] bg-[#ea2b0f] rounded-full px-2">
                3
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* navigation bar with dropdown */}
    </header>
  );
};

export default Header;
