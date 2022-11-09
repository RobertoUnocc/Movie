import React from "react";
import { Avatar, List, Button } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";
import Loading from "../Loading/Loading";

const MovieList = (props) => {
  const { results, loading } = props.populateMovies;

  if (loading || !results) {
    return <Loading />;
  }
  return (
    <List
      className="movie-list"
      size="default"
      header={<h2>{props.title}</h2>}
      bordered
      dataSource={results.results}
      renderItem={(movie) => <RenderMovie movie={movie} />}
    />
  );
};

const RenderMovie = (props) => {
  const { id, title, poster_path } = props.movie;
  const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <List.Item className="movie-list__movie">
      <List.Item.Meta
        avatar={<Avatar src={posterPath} />}
        title={<Link to={`/movie/${id}`}>{title}</Link>}
      />
      <Link to={`/movie/${id}`}>
        <Button type="primary" shape="round">
          &#62;
        </Button>
      </Link>
    </List.Item>
  );
};

export default MovieList;
