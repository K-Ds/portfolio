import Button from "./ButtonOutline";
import { useState } from 'react';

const Navbar = () => {
  const [navItems] = useState(['About', 'Work', 'Experience']);

  return (
    <nav className="flex justify-between py-4 px-2 items-center fixed lg:w-10/12 2xl:w-3/4 bg-black">
      <span className="font-semibold text-lg text-orange-500">
        KD-PORTFOLIO
      </span>
      <ul className="flex space-x-4 font-normal">
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={'#' + item}
                className={'text-white hover:text-orange-500'}
              >
                #{item}
              </a>
            </li>
          );
        })}
      </ul>
      <Button text="Contact Me" />
    </nav>
  );
};

export default Navbar