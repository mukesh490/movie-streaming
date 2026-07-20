import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import { IMAGE_BASE_URL } from "../utils/constants";
import MovieSkeleton from "../components/Skeleton/MovieSkeleton";
import {
  Star,
  CalendarDays,
  Clock3,
  Languages,
  Play,
  Plus,
} from "lucide-react";

function MovieDetails() {
  const { id } = useParams();

  const { movie, loading, error } = useMovieDetail(id);

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <MovieSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-2xl text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
    
      <div className="relative h-[70vh]">
        <img
          src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          className="h-full w-full object-cover"
        />


        <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent"></div>
      </div>

      <div className="relative -mt-48 mx-auto flex max-w-7xl flex-col gap-10 px-6 md:flex-row">
        <motion.img
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="w-72 rounded-2xl shadow-2xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <h1 className="text-5xl font-bold">{movie?.title}</h1>

          <div className="mt-6 flex flex-wrap gap-6 text-lg text-gray-300">
            <div className="flex items-center gap-2">
              <Star size={20} className="fill-yellow-400 text-yellow-400" />
              <span>{movie?.vote_average.toFixed(1)}</span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={20} className="text-green-500" />
              <span>{movie?.release_date}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={20} className="text-blue-500" />
              <span>{movie?.runtime} min</span>
            </div>

            <div className="flex items-center gap-2">
              <Languages size={20} className="text-purple-500" />
              <span>{movie?.original_language.toUpperCase()}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {movie?.genres?.map((genre) => (
              <span
                key={genre?.id}
                className="rounded-full bg-red-600 px-4 py-2"
              >
                {genre?.name}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-300">
            {movie?.overview}
          </p>
          <div className="mt-10 flex gap-5">
            <button className="flex items-center gap-2 rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold transition hover:bg-red-700">
              <Play size={20} fill="white" />
              Watch Now
            </button>

            <button className="flex items-center gap-2 rounded-lg border border-white px-8 py-3 text-lg transition hover:bg-white hover:text-black">
              <Plus size={20} />
              My List
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MovieDetails;
