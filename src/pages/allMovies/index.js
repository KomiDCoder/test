import { Fragment } from "react";
import MovieList from "../../components/movieList";
import { Link } from "react-router-dom";
const AllMovies = () => {
  return (
    <Fragment>
      <Link to="/movies">go to movies</Link>
      <MovieList title="all movies by week" byTime="week" byType="all" />
      <MovieList title="all movies by day" byTime="day" byType="all" />
    </Fragment>
  );
};
export default AllMovies;
