import { Card, Button, Row, Image, Col } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const baseUrl = process.env.REACT_APP_baseUrl;
const SingleMovie = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const getMovies = async () => {
    await axios
      .get(
        `${baseUrl}${localStorage.getItem(
          "movie_type"
        )}?id=${localStorage.getItem("movie_id")}`
      )
      .then((res) => {
        setMovie(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <Card
      loading={loading}
      //   title={movie.title}
      title={
        <Button onClick={() => navigate("/")} type="link">
          Back to Home
        </Button>
      }
    >
      <Row>
        <Col span={4}>
          <Image src={movie.posterurl} />
        </Col>
        <Col span={20} className="p-3">
          <h2>{`${movie.title}(${movie.year})`}</h2>

          <Row>
            <Col span={4}>Imdb Rating</Col>
            <Col span={20}  className="pl-2 mb-2">{movie.imdbRating}</Col>
          </Row>
          <Row>
            <Col span={4}>Content Rating</Col>
            <Col span={20}  className="pl-2 mb-2">{movie.contentRating}</Col>
          </Row>
          <Row>
            <Col span={4}>Average Rating</Col>
            <Col span={20}  className="pl-2 mb-2">{movie.averageRating}</Col>
          </Row>
          <Row>
            <Col span={4}>Duration</Col>
            <Col span={20}  className="pl-2 mb-2">{movie.duration}</Col>
          </Row>
          <Row>
            <Col span={4}>Genres</Col>
            <Col span={20}  className="pl-2 mb-2">
              {movie &&
                movie.genres &&
                movie.genres.map((item) => item).join(",")}
            </Col>
          </Row>
          <Row>
            <Col span={4}>Actors</Col>
            <Col span={20}  className="pl-2 mb-2">
              {movie &&
                movie.actors &&
                movie.actors.map((item) => item).join(",")}
            </Col>
          </Row>
          <Row>
            <Col span={4}>Release Date</Col>
            <Col span={20}  className="pl-2 mb-2">{movie.releaseDate}</Col>
          </Row>
          <Row>
            <Col span={4}>Story line</Col>
            <Col span={20}  className="pl-2 mb-2">{movie.storyline}</Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default SingleMovie;
