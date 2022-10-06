import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';

import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = (handleClick) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-600 hover:text-cyan-600"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#1f1935]">
        <img src={logo} alt="logo" className="w-full h-16 object-contain" />
        <NavLinks />
      </div>

      <div className=" absolute md:hidden block top-6 right-3">
        {mobileMenu ? (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" />
        ) : <HiOutlineMenu className="w-6 h-6 mr-2 text-white" />}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from`}>
        <img src={logo} alt="logo" className="w-full h-16 object-contain" />
        <NavLinks />
      </div>
    </>

  );
};

export default Sidebar;
