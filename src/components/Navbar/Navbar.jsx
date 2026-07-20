import React from 'react'
import Logo from '../Logo/Logo'
// import SearchBar from '../SearchBar/SearchBar'
import { Link, useNavigate } from 'react-router-dom'
import { Search } from "lucide-react";

function Navbar() {
    const navigate=useNavigate()
    const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};
    return (
        <nav className='bg-black text-white sticky top-0 z-50 shadow-lg'>
            <div className='max-w-7xl mx-auto px-5 py-4 flex tems-center justify-between'>
                <Logo />
                <ul className='hidden md:flex gap-8 font-medium py-2'>
                    <li >

                        <Link to="/">Home</Link>
                    </li>
                    <li onClick={() => scrollToSection("trending")}>
                        <Link to="/">Trending</Link>
                    </li>
                    <li onClick={() => scrollToSection("popular")}>
                        <Link to="/">Popular</Link>
                    </li>
                    <li onClick={() => scrollToSection("upcomming")}>
                        <Link to="/">Upcomming</Link>
                    </li>

                    <li onClick={() => scrollToSection("toprated")}>
                        <Link to="/">Top Rated</Link>
                    </li>
                </ul>
                <div className="hidden md:block">
                    <button
                        onClick={() => navigate("/search")}
                        className="flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-white transition hover:bg-red-600"
                    >
                        <Search size={20} />
                        Search
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar