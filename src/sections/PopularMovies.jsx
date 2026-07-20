import useMovies from "../hooks/useMovies";
import { getPopularMovies } from "../services/movieService";
import MovieSkeleton from "../components/Skeleton/MovieSkeleton";
import MovieCard from "../components/MovieCard/MovieCard";
import { MESSAGE, MOVIES_HEADING } from "../utils/constants";
import { Star } from "lucide-react";

function PopularMovies() {
  const { movies, loading, error } = useMovies(getPopularMovies);

  if (loading) {
    return (
      <section className="overflow-visible bg-black px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-white">
             {MOVIES_HEADING.popular}
          </h2>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 10 }).map((_, index) => (
              <MovieSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-black py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl font-semibold text-red-500">{error}</h2>

          <p className="mt-2 text-gray-400">{MESSAGE}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="popular" className="overflow-visible bg-black px-6 py-10">
      <div className="mx-auto max-w-7xl overflow-visible">
        <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-white">
          <Star size={30} className=" text-orange-500" />
          <span>{MOVIES_HEADING.popular}</span>
        </h2>

        <div className="grid grid-cols-2 gap-8 overflow-visible md:grid-cols-3 lg:grid-cols-5">
          {movies.map((movie) => (
            <div key={movie?.id} className="relative overflow-visible">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularMovies;
