import { Link } from "react-router-dom";
import { TriangleAlert, House } from "lucide-react";
import { motion } from "framer-motion";

function Error() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 12,
        }}
      >
        <TriangleAlert size={30} className="text-red-500" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-3xl font-semibold text-red-500"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-3 text-2xl font-semibold"
      >
        Page Not Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 max-w-lg text-gray-400"
      >
        Sorry, the page you are looking for doesn't exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-lg font-semibold transition hover:bg-red-700"
        >
          <House size={20} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

export default Error;
