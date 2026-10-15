import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex container mx-auto items-center justify-between p-4">
        <button
          className="cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <div>
          <img src={Logo} alt="Dev Stack" className="h-8" />
        </div>
        

        <div className="items-center hidden md:flex gap-3">
          <ul className="flex items-center gap-8">
            <li className="text-pink-600">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <button className="cursor-pointer text-sm">Sign In</button>
          <button className="cursor-pointer text-sm px-4 py-2 rounded-full bg-pink-600 text-white">
            Sign Up
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 p-4">
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer text-pink-600">Home</li>
            <li className="cursor-pointer">Technologies</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;