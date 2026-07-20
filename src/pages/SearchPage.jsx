import { useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import MovieCard from "../components/MovieCard/MovieCard";
import useDebounce from "../hooks/useDebounce";
import useMovies from "../hooks/useMovies";
import useSearchMovies from "../hooks/useSearchMovies";
import { getTrendingMovies } from "../services/movieService";
import MovieSkeleton from "../components/Skeleton/MovieSkeleton";
import NotFound from "./NotFound";

function SearchPage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  // Trending Movies
  const {
    movies: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useMovies(getTrendingMovies);

  // Search Movies
  const {
    movies: searchedMovies,
    loading: searchLoading,
    error: searchError,
  } = useSearchMovies(debouncedSearch);

  const isSearching = debouncedSearch.trim().length > 0;

  const movies = isSearching ? searchedMovies : trendingMovies;
  const loading = isSearching ? searchLoading : trendingLoading;
  const error = isSearching ? searchError : trendingError;

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-black">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-4">
          <button
            onClick={() => navigate(-1)}
            className="rounded-full p-2 transition hover:bg-gray-800"
          >
            <ArrowLeft size={24} />
          </button>

          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search movies..."
              className="w-full rounded-full bg-gray-900 py-3 pl-12 pr-5 text-white outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {loading && (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Array.from({ length: 10 }).map((_, index) => (
              <MovieSkeleton key={index} />
            ))}
          </div>
        )}

        {!loading && error && (
          <h2 className="mt-10 text-center text-xl text-red-500">{error}</h2>
        )}

        {!loading && !error && (
          <h2 className="mb-8 text-3xl font-bold text-gray-300">
            {isSearching ? "Search Results" : "Movies"}
          </h2>
        )}

        {!loading && !error && isSearching && searchedMovies.length === 0 && (
          <NotFound />
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default SearchPage;
