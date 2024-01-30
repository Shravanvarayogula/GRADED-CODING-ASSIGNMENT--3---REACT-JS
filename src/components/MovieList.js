import { Card, Row, Spin, Col } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { useNavigate } from "react-router-dom";

const MovieList = (props) => {
  const navigate = useNavigate();
  const FavouriteComponent = props.favouriteComponent;
  const handleClick = (movie) => {
    navigate(`${movie.title}`);
    localStorage.setItem("movie_id", movie.id);
    localStorage.setItem("movie_type", props.current);
  };
  return (
    <>
      {props.loading ? (
        <Row justify="center" align="middle" className="vh-100 text-center">
          <Col span={24}>
            <Spin size="large" />
          </Col>
        </Row>
      ) : (
        <Row>
          {// eslint-disable-next-line
          props.movies.length == 0 ? (
            <Row justify="center" align="middle" className="vh-100 vw-100 text-center">
              <Col span={24}><h5>No data found</h5></Col>
            </Row>
          ) : (
            ""
          )}
          {props.movies.map((movie, index) => (
            <Card
              key={movie.id}
              className="m-3"
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src={movie.posterurl}
                  height="300px"
                  onClick={() => handleClick(movie)}
                />
              }
              // onClick={() => handleClick(movie)}
            >
              <Meta
                title={movie.title}
                description={
                  <Row
                    className=" align-items-center justify-content-center"
                    onClick={() => props.handleFavouritesClick(movie)}
                  >
                    <FavouriteComponent />
                  </Row>
                }
              />
            </Card>
          ))}
        </Row>
      )}{" "}
    </>
  );
};

export default MovieList;
