import { Fragment } from "react";
import MovieList from "../../components/movieList";
import { Link } from "react-router-dom";

export default function Movies() {
    return(
        <Fragment>
            <Link to="/all">go to all</Link>
            <MovieList byType="movie" byTime="day" title="movies by day"/>
            <MovieList byType="movie" byTime="week" title="movies by week"/>
        </Fragment>
    )
}