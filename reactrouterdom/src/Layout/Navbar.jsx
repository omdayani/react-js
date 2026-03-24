import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="flex items-center justify-center mt-10">
        <nav className="bg-black/70 backdrop-blur-sm text-white px-6 py-4 flex items-center justify-between fixed rounded-full w-[80%]">
          <h1 className="text-xl font-bold">Company Name</h1>
          <ul className="flex items-center justify-between gap-x-4 text-lg font-medium">
            <li className="hover:text-black hover:bg-pink-200 px-2 py-1.5  transition-all rounded-2xl duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-black hover:bg-pink-200 px-2 py-1.5  transition-all rounded-2xl duration-300">
              <Link to="/product">Product</Link>
            </li>
            <li className="hover:text-black hover:bg-pink-200 px-2 py-1.5  transition-all rounded-2xl duration-300">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-black hover:bg-pink-200 px-2 py-1.5  transition-all rounded-2xl duration-300">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
