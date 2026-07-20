import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { getPopularMovies } from "../../services/movieService";
import FeaturedMovieCard from "../MovieCard/FeaturedMovieCard";
import { feature_movies } from "../../utils/constants";


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function FeaturedMovies() {
  const [movies, setMovies] = useState([]);

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.98, 1]);

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data.slice(0, 10));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black py-24 px-6 overflow-hidden"
    >
      <motion.div
        style={{
          y,
          scale,
          opacity,
        }}
        className="max-w-7xl mx-auto"
      >
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[8px] text-red-500 text-sm mb-4">
            {feature_movies.paragraph}
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white">
            {feature_movies.heading}
          </h2>
         

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
            {feature_movies.message}
          </p>
        </motion.div>

        {/* Grid */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-5
            gap-7
          "
        >
          {movies.map((movie) => (
            <motion.div
              key={movie.id}
              variants={itemVariants}
            >
              <FeaturedMovieCard movie={movie}/>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}