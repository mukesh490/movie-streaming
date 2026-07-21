import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium items-center">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li onClick={() => scrollToSection("trending")} className="cursor-pointer">
            Trending
          </li>

          <li onClick={() => scrollToSection("popular")} className="cursor-pointer">
            Popular
          </li>

          <li onClick={() => scrollToSection("upcomming")} className="cursor-pointer">
            Upcoming
          </li>

          <li onClick={() => scrollToSection("toprated")} className="cursor-pointer">
            Top Rated
          </li>
        </ul>

        {/* Desktop Search */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/search")}
            className="flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 transition hover:bg-red-600"
          >
            <Search size={20} />
            Search
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black border-t border-gray-800 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 text-lg">
          <li onClick={() => setIsOpen(false)}>
            <Link to="/">Home</Link>
          </li>

          <li
            className="cursor-pointer"
            onClick={() => scrollToSection("trending")}
          >
            Trending
          </li>

          <li
            className="cursor-pointer"
            onClick={() => scrollToSection("popular")}
          >
            Popular
          </li>

          <li
            className="cursor-pointer"
            onClick={() => scrollToSection("upcomming")}
          >
            Upcoming
          </li>

          <li
            className="cursor-pointer"
            onClick={() => scrollToSection("toprated")}
          >
            Top Rated
          </li>

          <button
            onClick={() => {
              navigate("/search");
              setIsOpen(false);
            }}
            className="flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 hover:bg-red-600 transition"
          >
            <Search size={18} />
            Search
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;