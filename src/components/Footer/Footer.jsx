import { motion } from "framer-motion";
import {
    FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-black border-t border-zinc-800 mt-2"
    >
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-red-600 text-3xl font-bold">
              MovieFlix
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quae aut quo beatae quia voluptatem, earum sit autem exercitationem temporibus nam natus harum hic suscipit id unde! Tenetur, id alias.
            </p>
          </div>


          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-red-500 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Movies
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Search
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Featured
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-red-500 cursor-pointer transition">
                Trending
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Popular
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Upcoming
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Top Rated
              </li>

            </ul>
          </div>

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <motion.a
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                }}
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-zinc-800
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-sky-600
                  transition
                "
              >
                
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.2,
                  rotate: -10,
                }}
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-zinc-800
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-gray-700
                  transition
                "
              >
                
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                }}
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-zinc-800
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-sky-500
                  transition
                "
              >
                <FaTwitter />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.2,
                  rotate: -10,
                }}
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-zinc-800
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-red-600
                  transition
                "
              >
                <FaYoutube />
              </motion.a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-zinc-800 mt-12 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © 2026 Mukesh Yadav React Js Developer
          </p>

        </div>

      </div>
    </motion.footer>
  );
}