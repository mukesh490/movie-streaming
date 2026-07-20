import FeaturedMovies from "../components/FeaturedMovies/FeaturedMovies";
import Footer from "../components/Footer/Footer";
import Hero from "../components/herosections/Hero";
import Navbar from "../components/Navbar/Navbar";
import PopularMovies from "../sections/PopularMovies";
import TopRatedMovies from "../sections/TopRatedMovies";
import TrendingMovies from "../sections/TrendingMovies";
import UpcomingMovies from "../sections/UpcomingMovies";


function Home() {

    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedMovies />
            <TrendingMovies />
            <PopularMovies  />
            <UpcomingMovies />
            <TopRatedMovies />
            <Footer />

        </>
    )
}

export default Home;