import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import SearchPage from "../pages/SearchPage";
import Error from "../components/Error/Error";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRoutes;