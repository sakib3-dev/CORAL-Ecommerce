import React, { useState } from 'react'
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes  } from "react-icons/fa";
import Flex from "../Flex";
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const navItems =[
    {title: "Jewelry & Accessories", path: "/"},
    {title: "Clothing & Shoes", path: "/"},
    {title: "Home & Living", path: "/"},
    {title: "Wedding & Party", path: "/"},
    {title: "Toys & Entertainment", path: "/"},
    {title: "Art & Collectibles", path: "/"},
    {title: "Craft Supplies & Tools", path: "/"},
  ]
  return (
    <header className="max-w-screen-2xl mx-auto xl:px-28 px-4 absolute top-0 left-0 right-0 z-50 ">
        <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <FaSearch className="text-Black w-5 h-5 cursor-pointer hidden md:block" />
        {/* logo */}
        <a href="/"><img src={logo} alt="logo" /></a>
        {/* logo */}

        {/* account and shopping button */}
        <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
            <a href="/">
              <Flex className="gap-2 items-center" ><FaUser /> Account</Flex>
            </a>
            <a href="/">
              <Flex className="gap-2 items-center" ><FaShoppingBag /> Shopping</Flex>
            </a>
        </div>
        {/* account and shopping button */}

        {/* navbar for sm devices  */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {
              isMenuOpen ? <FaTimes className="w-5 h-5 text-Black" /> : <FaBars className="w-5 h-5 text-Black" />
              
            }
          </button>
        </div>
        {/* navbar for sm devices  */}
        </nav>

        <hr />

        {/* category items  */}
        <div className="pt-4">
          <ul className="lg:flex items-center justify-between text-Black font-robo hidden">
            {
              navItems.map(({title, path}) => (
                <li key={title} className="hover:text-slate-400">
                  <Link to="/">{title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        {/* category items  */}

        {/* only mobile menu  */}
        <div className="">
          <ul className={`bg-Black font-robo text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
            {
              navItems.map(({title, path}) => (
                <li key={title} className="font-semibold hover:text-slate-400">
                  <Link to="/">{title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        {/* only mobile menu  */}
    </header>
  )
}
