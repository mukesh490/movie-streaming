import { useEffect, useState } from "react";
import { searchMovies } from "../services/movieService";

function useSearchMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      try {
        setLoading(true);

        const data = await searchMovies(query);

        setMovies(data);

        setError("");
      } catch (err) {
        console.error(err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return {
    movies,
    loading,
    error,
  };
}

export default useSearchMovies;