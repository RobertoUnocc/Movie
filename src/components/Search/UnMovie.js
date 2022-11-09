import React from "react";
import { Card, Col, Tooltip } from "antd";

import { Link } from "react-router-dom";

const { Meta } = Card;
const UnMovie = (props) => {
  const { backdrop_path, title, overview, id_pelicula } = props;

  return (
    <Col span={6} className="grid-Site">
      <Link to={`/movie/${id_pelicula}`}>
        <Tooltip title={overview} color="#3b4248" key="gold">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt={title}
                src={
                  backdrop_path
                    ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
                    : "https://avalos.sv/wp-content/uploads/default-featured-image.png"
                }
              />
            }
          >
            <Meta title={title} />
          </Card>
        </Tooltip>
      </Link>
    </Col>
  );
};

export default UnMovie;
