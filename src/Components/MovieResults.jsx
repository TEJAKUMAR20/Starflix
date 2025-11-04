// src/Components/MovieResults.jsx
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PaginationBar from "./PaginationBar"; //  Reusable Pagination

const MovieResults = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [sortOption, setSortOption] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(10);
  const [showBackTop, setShowBackTop] = useState(false); //  for scroll-up text
  const navigate = useNavigate();

  const movies = [
    { title: "Back To The Future", lang: "english", image: "/images/posters/backtothefuture.png" },
    { title: "12thfail", lang: "english", image: "/images/posters/12thfail.png" },
    { title: "2018", lang: "malayalam", image: "/images/posters/2018.png" },
    { title: "Hobbit", lang: "english", image: "/images/posters/hobbit.png" },
    { title: "RRR", lang: "telugu", image: "/images/posters/rrr.png" },
    { title: "Leo", lang: "tamil", image: "/images/posters/leo.png" },
    { title: "Brahmastra", lang: "hindi", image: "/images/posters/brahmastra.png" },
    { title: "Kalki 2898 AD", lang: "hindi", image: "/images/posters/kalki.png" },
    { title: "Jailer", lang: "tamil", image: "/images/posters/jailer.png" },
    { title: "Robo", lang: "tamil", image: "/images/posters/robo.png" },
    { title: "Star Wars", lang: "english", image: "/images/posters/starwars.png" },
    { title: "Dangal", lang: "hindi", image: "/images/posters/dangal.png" },
    { title: "Salaar", lang: "telugu", image: "/images/posters/salaar.png" },
    { title: "Devara", lang: "telugu", image: "/images/posters/devara.png" },
    { title: "Master", lang: "tamil", image: "/images/posters/master.png" },
    { title: "Vikram", lang: "tamil", image: "/images/posters/vikram.png" },
  ];

  const generateSlug = (title) =>
    title
      .toLowerCase()
      .replace(/\(.*?\)/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim();

  const handleReadMore = (lang, title) => {
    const slug = generateSlug(title);
    navigate(`/movie/${lang.toLowerCase()}/${slug}`);
  };

  const totalMovies = movies.length;
  const totalPages = Math.ceil(totalMovies / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const currentMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  //  Show “Back to Top” only after scrolling down
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 250);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ backgroundColor: "#0b0f19" }}>
      <section style={{ color: "white", padding: "30px 0" }}>
        <Container>
          {/*  Header */}
          <Row
            className="align-items-center justify-content-between py-3 mb-4"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.15)",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <Col>
              <p className="mb-0 text-light">
                Found <strong>{totalMovies}</strong> movies in total
              </p>
            </Col>

            <Col xs="auto" className="d-flex align-items-center">
              <span className="me-2 text-secondary">Sort by:</span>
              <Form.Select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                size="sm"
                className="bg-dark text-white border-secondary"
                style={{ width: "220px" }}
              >
                <option value="popularity">Popularity Descending</option>
                <option value="rating">Rating Descending</option>
                <option value="latest">Latest</option>
              </Form.Select>
            </Col>
          </Row>

          {/*  Movie Grid */}
          <Row className="g-3 mt-2">
            {currentMovies.map((movie, index) => (
              <Col key={index} xs={6} sm={4} md={3} lg={2}>
                <Card
                  className="bg-transparent border-0 text-center"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="position-relative overflow-hidden rounded">
                    <Card.Img
                      src={movie.image}
                      alt={movie.title}
                      className="rounded"
                      style={{ height: "320px", objectFit: "cover" }}
                    />
                    {hoveredIndex === index && (
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
                        <Button
                          variant="info"
                          size="sm"
                          className="fw-semibold text-dark rounded-pill px-3 py-2"
                          onClick={() => handleReadMore(movie.lang, movie.title)}
                        >
                          Read More
                        </Button>
                      </div>
                    )}
                  </div>

                  <Card.Body className="p-2">
                    <Card.Title
                      className="text-uppercase fs-6 mt-2"
                      style={{
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                        color: "white",
                      }}
                    >
                      {movie.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/*  Pagination Section */}
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={moviesPerPage}
            setItemsPerPage={setMoviesPerPage}
            onPageChange={setCurrentPage}
            label="Movies"
          />

        
          
        </Container>
      </section>
    </div>
  );
};

export default MovieResults;
