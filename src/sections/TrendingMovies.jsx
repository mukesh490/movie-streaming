import useMovies from "../hooks/useMovies";
import { getTrendingMovies } from "../services/movieService";
import MovieSkeleton from "../components/Skeleton/MovieSkeleton";
import MovieSlider from "../components/MovieSlider/MovieSlider";
import { MOVIES_HEADING } from "../utils/constants";

function TrendingMovies() {
  const { movies, loading, error } = useMovies(getTrendingMovies);

  if (loading) {
    return (
      <section className="bg-black px-6 py-10">
        <h2 className="mb-6 text-3xl font-bold text-white">
           {MOVIES_HEADING.trending}
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <MovieSkeleton key={index} />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-black py-16 text-center">
        <h2 className="text-2xl text-red-500">{error}</h2>
      </section>
    );
  }

  return (
    <MovieSlider
      title="Trending Movies"
      movies={movies}
   
    />
  );
}

export default TrendingMovies;