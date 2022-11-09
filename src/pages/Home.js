import React from "react";
import useFetch from "../hooks/useFetch";
import { Row, Col } from "antd";
import { URL_API, API } from "../utils/constantes";
import SliderMovies from "../components/SliderMovies/SliderMovies";
import MovieList from "../components/MovieList/MovieList";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
  );

  const populateMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`
  );

  const topRatedMovies = useFetch(
    `${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`
  );

  return (
    <>
      <SliderMovies newMovies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList
            title="Películas Populares"
            populateMovies={populateMovies}
          />
        </Col>
        <Col span={12}>
          <MovieList
            title="Top Mejores Peliculas Puntuadas"
            populateMovies={topRatedMovies}
          />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Home;
