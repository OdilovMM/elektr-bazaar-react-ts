import { Link } from 'react-router-dom';
import CustomButton from '../components/Button';
import SearchForm from '../components/SearchForm';
import React, { useState } from 'react';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BsBasket3 } from 'react-icons/bs';
import sublinks from '../utils/Navlinks'; // Adjust the path as needed

const Header: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Search for item', query);
  };

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header className="w-full  pb-[45px]  border-b-2 border-gray-300">
      {/* upper notification */}
      <div className="bg-[#233a95]">
        <div className="">
          <p className="mb-0 mt-0 text-center text-white text-md py-2 ">
            Due to the <b>WW4</b> war, orders may be processed with a slight
            delay
          </p>
        </div>
      </div>

      {/* bottom logo button search_field account price and basket */}
      <div className="w-full my-4 ">
        <div className="w-[80%] mx-auto flex flex-row h-[40px]">
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
                <span className="absolute text-white top-[-12px] right-[-10px] bg-[#ea2b0f] rounded-full px-2">
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* navigation bar with dropdown */}
      <nav className="w-full ">
        <div className="w-[80%] mx-auto flex flex-row h-[45px]">
          {/* category btn */}
          <div className="flex-[3] ">
            <CustomButton
              color="secondary"
              size="large"
              onClick={() => setOpenMenu(!openMenu)}
            >
              Product Categories
            </CustomButton>
            {openMenu && (
              <div className="w-[227px] bg-white rounded-md shadow-lg">
                <ul className="px-3 py-4 flex flex-col gap-3 cursor-pointer">
                  {sublinks.map((sublink) => (
                    <li key={sublink.pageId}>
                      <Link
                        to={sublink.url}
                        className="hover:no-underline uppercase"
                      >
                        {sublink.page}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* menus btn */}
          <div className="flex-[9] flex w-full ">
            <ul className="flex flex-wrap justify-between items-center w-full mb-0 gap-4">
              {sublinks.map((sublink) => (
                <li
                  key={sublink.pageId}
                  className="relative uppercase bg-slate-300 rounded-lg cursor-pointer group"
                >
                  {/* Main link */}
                  <Link
                    to={`/${sublink.url}`}
                    className="text-slate-700 block px-4 py-2 hover:no-underline"
                  >
                    {sublink.page}
                  </Link>

                  {/* Subcategory dropdown */}
                  {sublink.links && (
                    <ul className="absolute w-[180px] uppercase left-0 mt-0 hidden group-hover:block bg-white shadow-lg rounded-md">
                      {sublink.links.map((link) => (
                        <li
                          key={link.id}
                          className="px-4 py-[4px] hover:bg-gray-200"
                        >
                          <Link
                            to={link.url}
                            className="flex items-center gap-2 text-slate-700 hover:no-underline"
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
