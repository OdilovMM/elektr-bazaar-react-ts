import { Link } from 'react-router-dom';
import CustomButton from '../components/Button';
import SearchForm from '../components/SearchForm';
import React, { useState } from 'react';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BsBasket3 } from 'react-icons/bs';
import sublinks from '../utils/Navlinks'; // Adjust the path as needed
import { MdKeyboardArrowRight } from 'react-icons/md';

const Header: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Search for item', query);
  };

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header className="w-full  pb-[15px]   relative z-50 border-b-[1px] border-[#e3e4e6] ">
      {/* upper notification */}
      <div className="bg-[#233a95] ">
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
      <nav className="w-full z-[88888] ">
        <div className="w-[80%] mx-auto  flex flex-row h-[45px] ">
          {/* category btn */}
          <div className="flex-[3] relative">
            <CustomButton
              color="secondary"
              size="large"
              onClick={() => setOpenMenu(!openMenu)}
            >
              All Categories
            </CustomButton>

            {openMenu && (
              <div className="w-full bg-white absolute top-[85px] border-[1px] border-[#e3e4e6] rounded-sm z-[88888]">
                <ul className="flex flex-col items-start w-full mb-0">
                  {sublinks.map((sublink) => (
                    <li
                      key={sublink.pageId}
                      className="relative uppercase w-full hover:bg-gray-100 cursor-pointer group"
                    >
                      {/* Main link */}
                      <Link
                        to={`/${sublink.url}`}
                        className="text-slate-700  py-2 px-3 hover:no-underline flex items-center justify-between"
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
                          className="absolute left-[310.5px] border-[1px] border-[#e3e4e6]  rounded-sm top-0 hidden group-hover:block bg-white"
                          style={{ width: 'inherit' }}
                        >
                          {sublink.links.map((link) => (
                            <li
                              key={link.id}
                              className="w-full py-2 hover:bg-gray-100"
                            >
                              <Link
                                to={link.url}
                                className="flex items-center w-full gap-2 px-3 py-[0.5px] text-slate-700 hover:no-underline"
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
          {/* menus btn */}
          <div className="flex-[9] flex w-full ">
            <ul className="flex flex-row items-center justify-start w-full">
              <li>
                <Link
                  to="/"
                  className="hover:no-underline uppercase px-3 flex items-center justify-start gap-4"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:no-underline uppercase px-3 flex items-center justify-start gap-4"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:no-underline uppercase px-3 flex items-center justify-start gap-4"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:no-underline uppercase px-3 flex items-center justify-start gap-4"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:no-underline uppercase px-3 flex items-center justify-start gap-4"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:no-underline uppercase px-3 flex items-center justify-start gap-4"
                >
                  Faq
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

{
  /* <ul className="flex flex-wrap  items-center w-full mb-0 gap-4">
{sublinks.map((sublink) => (
  <li
    key={sublink.pageId}
    className="relative uppercase bg-slate-300 rounded-lg cursor-pointer group"
  >
    {/* Main link */
}
// <Link
//   to={`/${sublink.url}`}
//   className="text-slate-700 block px-4 py-2 hover:no-underline"
// >
//   {sublink.page}
// </Link>

{
  /* Subcategory dropdown */
}
//   {sublink.links && (
//     <ul className="absolute w-[180px] uppercase left-0 mt-0 hidden group-hover:block bg-white shadow-md rounded-md">
//       {sublink.links.map((link) => (
//         <li
//           key={link.id}
//           className="px-4 py-[4px] hover:bg-gray-200"
//         >
//           <Link
//             to={link.url}
//             className="flex items-center gap-2 text-slate-700 hover:no-underline"
//           >
//             {link.label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   )}
// </li>
// ))}
// </ul> */}
