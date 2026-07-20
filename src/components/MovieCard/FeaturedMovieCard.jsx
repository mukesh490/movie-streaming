import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, CalendarDays } from "lucide-react";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const overlayVariants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.35,
    },
  },
};

const contentVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  hover: {
    opacity: 1,
    y: 0,
  },
};

export default function FeaturedMovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <motion.div
        initial="initial"
        whileHover="hover"
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          bg-zinc-900
          cursor-pointer
          shadow-xl
        "
        whileHover={{
          y: -12,
        }}
        transition={{
          duration: 0.35,
        }}
      >
        {/* Poster */}

        <motion.img
          src={`${IMAGE_URL}${movie.poster_path}`}
          alt={movie.title}
          loading="lazy"
          className="w-full h-[420px] object-cover"
          initial={{
            opacity: 0,
            scale: 1.12,
            filter: "blur(12px)",
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          variants={{
            hover: {
              scale: 1.08,
            },
          }}
        />

        {/* Overlay */}

        <motion.div
          variants={overlayVariants}
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/70
            to-transparent
          "
        />

        {/* Content */}

        <motion.div
          variants={contentVariants}
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-20
            p-5
          "
        >
          <motion.h3
            variants={itemVariants}
            className="line-clamp-1 text-xl font-bold text-white"
          >
            {movie.title}
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="mt-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-2 rounded-full bg-yellow-400 px-3 py-1">
              <Star
                size={16}
                className="fill-black text-black"
              />

              <span className="text-sm font-bold text-black">
                {movie.vote_average?.toFixed(1)}
              </span>
            </div>

            <div className="flex items-center gap-1 text-gray-200">
              <CalendarDays size={16} />
              <span className="text-sm">
                {movie.release_date}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Border */}

        <motion.div
          variants={overlayVariants}
          className="
            absolute
            inset-0
            rounded-2xl
            border-2
            border-red-500
            pointer-events-none
          "
        />

        {/* Glow */}

        <motion.div
          variants={overlayVariants}
          className="
            absolute
            inset-0
            rounded-2xl
            shadow-[0_0_40px_rgba(239,68,68,0.25)]
            pointer-events-none
          "
        />
      </motion.div>
    </Link>
  );
}