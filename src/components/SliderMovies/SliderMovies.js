import React from "react";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";
import Loading from "../Loading/Loading";

const SliderMovies = (newMovies) => {
  const { loading, results, error } = newMovies.newMovies;

  if (loading || !results) {
    return <Loading />;
  }

  return (
    <Carousel autoplay className="slider-movie">
      {results.results.map((movie) => (
        <Tarjeta movie={movie} key={movie.id} />
      ))}
    </Carousel>
  );
};
const Tarjeta = (movie) => {
  const {
    movie: { id, backdrop_path, title, overview },
  } = movie;
  const backdropPath = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <div
      className="slider-movie__movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="slider-movie__movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <br />
          <Link to={`/movie/${id}`}>
            <Button type="primary">Ver mas</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SliderMovies;
