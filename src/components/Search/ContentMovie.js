import React, { Suspense, lazy } from "react";
import { Row, Card } from "antd";
import Loading from "../Loading/Loading";
// import UnMovie from "./UnMovie";

const UnMovie = lazy(() => import("./UnMovie"));

const ContentMovie = (props) => {
  const { ListMovie } = props;
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {ListMovie
          ? ListMovie.map((movie) => (
              <Suspense fallback={<Loading />}>
                <UnMovie
                  id_pelicula={movie.id}
                  backdrop_path={movie.backdrop_path}
                  title={movie.title}
                  overview={movie.overview}
                  key={movie.id}
                />
              </Suspense>
            ))
          : null}
      </Row>
    </div>
  );
};

export default ContentMovie;
