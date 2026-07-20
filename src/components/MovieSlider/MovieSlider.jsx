import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";

import MovieCard from "../MovieCard/MovieCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function MovieSlider({ title, movies }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -900,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 900,
      behavior: "smooth",
    });
  };

  return (
    <section id="trending" className="bg-black py-12">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 flex items-center gap-3 px-6 text-4xl font-bold text-white"
        >
             <Flame size={30} className="text-orange-500" />
          {title}
        </motion.h2>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="
              absolute
              left-2
              top-1/2
              -translate-y-1/2
              z-50

              h-12
              w-12

              rounded-full
              bg-black/70
              text-white

              flex
              items-center
              justify-center

              transition
              hover:bg-red-600
            "
          >
            <ChevronLeft size={24} />
          </button>


          <motion.div
            ref={sliderRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              flex
              gap-6
              overflow-x-auto
              overflow-y-visible
              scroll-smooth

              px-14
              py-12

              scrollbar-hide
            "
          >
            {movies.map((movie) => (
              <motion.div
                key={movie.id}
                variants={cardVariants}
                className="min-w-55 shrink-0"
              >
                <MovieCard movie={movie} />
              </motion.div>
            ))}
          </motion.div>

          <button
            onClick={scrollRight}
            className="
              absolute
              right-2
              top-1/2
              -translate-y-1/2
              z-50

              h-12
              w-12

              rounded-full
              bg-black/70
              text-white

              flex
              items-center
              justify-center

              transition
              hover:bg-red-600
            "
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default MovieSlider;
