import { Fragment } from "react";
import MovieList from "../../components/movieList";
const AllMovies = () => {
  return (
    <Fragment>
      <MovieList title="all movies by week" byTime="week" byType="all" />
      <MovieList title="all movies by day" byTime="day" byType="all" />
    </Fragment>
  );
};
export default AllMovies;
