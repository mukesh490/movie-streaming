import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";

function SearchBar() {

  const navigate = useNavigate();

  
  return (
    <input
      type="text"
      value={search}
      onClick={() => navigate("/search")}
      placeholder="Search movies..."
      className="w-80 rounded-lg bg-gray-900 px-4 py-2 text-white outline-none"
    />
  );
}

export default SearchBar;