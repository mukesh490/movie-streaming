import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useMovies from "../../hooks/useMovies";
import { getTrendingMovies } from "../../services/movieService";
import MovieSkeleton from "../Skeleton/MovieSkeleton";
import {
  Star,
  CalendarDays,
  Play,
  Info,
} from "lucide-react";

function Hero() {
  const { movies, loading, error } = useMovies(getTrendingMovies);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <MovieSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}${movie?.backdrop_path})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col justify-center max-w-2xl px-8 text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold">{movie?.title}</h1>

          <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Star size={18} className="fill-yellow-400 text-yellow-400" />
              <span>{movie?.vote_average?.toFixed(1)}</span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={18} className="text-green-500" />
              <span>{movie?.release_date}</span>
            </div>
          </div>

          <p className="mt-6 text-lg line-clamp-4">{movie?.overview}</p>

          <div className="mt-8 flex gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 transition hover:bg-red-700">
              <Play size={18} fill="white" />
              Watch Now
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-black transition hover:bg-gray-300">
              <Info size={18} />
              More Info
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
