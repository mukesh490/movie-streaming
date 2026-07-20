import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Play, Plus, Star } from "lucide-react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const poster =
    movie?.poster_path || movie?.backdrop_path
      ? `${IMAGE_BASE_URL}${movie?.poster_path || movie?.backdrop_path}`
      : "https://placehold.co/500x750?text=No+Image";

  return (
    <motion.div
      layout
      initial={false}
      onClick={() => {
        navigate(`/movie/${movie?.id}`)
      }}
      whileHover={{
        scale: 1.12,
        y: -20
      }}
      transition={{
        delay: 0.2,
        duration: 0.35,
        ease: "easeOut",
      }}
      className="group relative h-82.5 overflow-hidden rounded-2xl bg-[#181818] shadow-lg cursor-pointer"
    >


      <img
        src={poster}
        alt={movie?.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent opacity-70 transition duration-300 group-hover:opacity-100" />
      <div className="absolute left-3 top-3 rounded-2xl px-3 py-1 text-sm font-semibold text-white shadow-lg">
         <Star  size='20' className="text-orange-400" /> {movie?.vote_average?.toFixed(1)}
      </div>

      <div className="absolute bottom-0 w-full p-4">

        <h3 className="line-clamp-1 text-lg font-bold text-white">
          
          {movie?.title}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-300">

          <span>
            {movie?.release_date
              ? movie?.release_date.split("-")[0]
              : "N/A"}
          </span>

          <span>•</span>

          <span>HD</span>

        </div>

        <p className="mt-3 line-clamp-2 text-sm text-gray-300 opacity-0 transition duration-300 group-hover:opacity-100">
          {movie?.overview || "No overview available."}
        </p>

        {/* Buttons */}

        <div className="mt-4 flex translate-y-4 gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

          <Link
            to={`/movie/${movie?.id}`}
            onClick={(e) => {
              e.stopPropagation()
            }}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold text-black transition hover:bg-gray-200"
          >
            <Play
              size={18}
              fill="black"
            />
            Watch Now
          </Link>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white text-white transition hover:bg-white hover:text-black"
          >
            <Plus size={20} />
          </button>

        </div>

      </div>
    </motion.div>
  );
}

export default MovieCard;