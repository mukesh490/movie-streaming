import { useEffect, useState } from "react";
import { getMovieDetail } from "../services/movieService";

function useMovieDetail(id) {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!id) return;
        const fetchMoviesdetails = async () => {
            try {
                setLoading(true);
                const data = await getMovieDetail(id);
                setMovie(data);
                setError("");
            } catch (error) {
                setLoading(false);
                setError("Something went wrong");
            } finally {
                setLoading(false);
            }
        }
          fetchMoviesdetails();
          
    }, [id])
     return {
    movie,
    loading,
    error,
  };
}

export default useMovieDetail;