import React from 'react';

const Header = () => {
  return (
    <header>
      {/* upper notification */}
      <div className="bg-[#233a95]">
        <div className="">
          <p className="mb-0 mt-0 text-center text-white text-md py-2 ">
            Due to the <b>WW4</b> war, orders may be processed with a slight
            delay
          </p>
        </div>
      </div>

      {/* bottom  */}
      <div className="">
        <div></div>
      </div>
    </header>
  );
};

export default Header;
