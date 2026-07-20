import { useEffect, useState } from "react";

const useMovies = (fetchFunction) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchMovies();
    }, [fetchFunction]);


    const fetchMovies = async () => {
        try {
            setLoading(true);
            const data = await fetchFunction();
            setMovies(data);
            setError("");
        } catch (err) {
            console.error(err);
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }

    }

    return {
        movies,
        loading,
        error,
    };


}

export default useMovies;