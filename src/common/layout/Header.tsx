import { Link } from 'react-router-dom';
import CustomButton from '../components/Button';
import SearchForm from '../components/SearchForm';
import React from 'react';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BsBasket3 } from 'react-icons/bs';

const Header: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Search for item', query);
  };

  return (
    <header className="w-full">
      {/* upper notification */}
      <div className="bg-[#233a95]">
        <div className="">
          <p className="mb-0 mt-0 text-center text-white text-md py-2 ">
            Due to the <b>WW4</b> war, orders may be processed with a slight
            delay
          </p>
        </div>
      </div>

      {/* bottom logo button search_field account price and basket  */}
      <div className="w-full my-4 ">
        <div className="w-[80%]   mx-auto flex flex-row h-[40px]  ">
          {/* left small */}
          <div className="flex-[3] flex justify-center items-center ">
            <Link to="/">
              <h2>Logo</h2>
            </Link>
          </div>
          {/* right big */}
          <div className="flex justify-between flex-[9] items-center gap-[65px] ">
            <div className="flex-[7]">
              <SearchForm
                placeholder="Search products..."
                buttonText="Find"
                onSearch={handleSearch}
              />
            </div>
            <div className="flex-[2] flex justify-around items-center flex-row">
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
                <span className="absolute top-[-12px] right-[-10px] bg-red-400 rounded-full px-2">
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* navigation bar with dropdown */}
      <nav>navigations</nav>
    </header>
  );
};

export default Header;
