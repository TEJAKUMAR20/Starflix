// src/Components/NewPopular.jsx
import React, { useMemo, useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import PaginationBar from "./PaginationBar"; //  Import reusable PaginationBar

const NewPopular = () => {
  const movies = useMemo(
    () => [
      { title: "12th fail", image: "/images/posters/12thfail.png" },
      { title: "Avaesh", image: "/images/posters/avaesh.png" },
      { title: "Avatar", image: "/images/posters/avatar.png" },
      { title: "Avengers", image: "/images/posters/avengers.png" },
      { title: "Bahubali", image: "/images/posters/bahubali.png" },
      { title: "BigBoss", image: "/images/posters/bigboss.png" },
      { title: "Boys", image: "/images/posters/boys.png" },
      { title: "Chhichhore", image: "/images/posters/Chhichhore.png" },
      { title: "Dangal", image: "/images/posters/dangal.png" },
      { title: "Devara", image: "/images/posters/devara.png" },
      { title: "Dragon", image: "/images/posters/dragon.png" },
      { title: "Eleven", image: "/images/posters/eleven.png" },
      { title: "Fast", image: "/images/posters/fast.png" },
      { title: "Gabbarsingh", image: "/images/posters/gabbarsingh.png" },
      { title: "Hobbit", image: "/images/posters/hobbit.png" },
      { title: "Hosteldays", image: "/images/posters/Hosteldays.png" },
      { title: "Indian2", image: "/images/posters/indian2.png" },
      { title: "Jailer", image: "/images/posters/jailer.png" },
      { title: "Jurassicpark", image: "/images/posters/jurassicpark.png" },
      { title: "Kalki", image: "/images/posters/Kalki.png" },
      { title: "Leo", image: "/images/posters/leo.png" },
      { title: "Logan", image: "/images/posters/logan.png" },
      { title: "Maaveeran", image: "/images/posters/maaveeran.png" },
      { title: "Magadheera", image: "/images/posters/magadheera.png" },
      { title: "Master", image: "/images/posters/master.png" },
      { title: "MsDhoni", image: "/images/posters/msdhoni.png" },
      { title: "Oblivion", image: "/images/posters/oblivion.png" },
      { title: "OG", image: "/images/posters/og.png" },
      { title: "Pathaan", image: "/images/posters/pathaan.png" },
      { title: "Premalu", image: "/images/posters/Premalu.png" },
      { title: "Pushpa2", image: "/images/posters/pushpa2.png" },
      { title: "Robo", image: "/images/posters/robo.png" },
      { title: "Salaar", image: "/images/posters/Salaar.png" },
      { title: "Sicaro", image: "/images/posters/sicaro.png" },
      { title: "Sitaramam", image: "/images/posters/sitaramam.png" },
      { title: "Spiderman", image: "/images/posters/spiderman.png" },
      { title: "Vikram", image: "/images/posters/vikram.png" },
      { title: "Wonder", image: "/images/posters/wonder.png" },
      { title: "Dancepluse", image: "/images/dancepluse.png" },
      { title: "Familyman", image: "/images/familyman.png" },
      { title: "MoneyHiest", image: "/images/posters/moneyhiest.png" },
    ],
    []
  );

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(20);
  const [sortOption, setSortOption] = useState("popularity");
  const [showBackTop, setShowBackTop] = useState(false); // 👈 Added

  const totalMovies = movies.length;
  const totalPages = Math.max(1, Math.ceil(totalMovies / moviesPerPage));
  const startIndex = (currentPage - 1) * moviesPerPage;
  const visibleMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  //  Show Back to Top only after scrolling down
  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 250);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: "#0b0f19" }}>
      <section style={{ color: "#fff", minHeight: "100vh" }}>
        <Container className="py-4">
          <Row className="g-4">
            {/* ===== LEFT COLUMN ===== */}
            <Col lg={9}>
              {/* Top Bar */}
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

              {/* Movie Grid */}
              <Row className="g-4">
                {visibleMovies.map((movie, index) => (
                  <Col key={index} xs={6} sm={4} md={3}>
                    <Card
                      className="bg-transparent border-0 text-center"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{ cursor: "pointer", position: "relative" }}
                    >
                      <div className="overflow-hidden rounded position-relative">
                        <Card.Img
                          src={movie.image}
                          alt={movie.title}
                          style={{ height: "320px", objectFit: "cover" }}
                        />

                        {/* Hover Overlay */}
                        {hoveredIndex === index && (
                          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
                            <Button
                              variant="info"
                              size="sm"
                              className="fw-semibold text-dark rounded-pill px-3 py-2"
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
                            color: "#f3f2eeff",
                            fontSize: "0.9rem",
                          }}
                        >
                          {movie.title}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              {/*  Global PaginationBar */}
              <PaginationBar
                currentPage={currentPage}
                totalPages={totalPages}
                itemsPerPage={moviesPerPage}
                setItemsPerPage={setMoviesPerPage}
                onPageChange={setCurrentPage}
                label="Movies"
              />

              {/*  Back to Top Text */}
              {showBackTop && (
                <div
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  style={{
                    textAlign: "center",
                    marginTop: "40px",
                    cursor: "pointer",
                    color: "#0dcaf0",
                    fontWeight: "600",
                    textDecoration: "underline",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  Back to Top ↑
                </div>
              )}
            </Col>

            {/* ===== RIGHT COLUMN (FILTERS) ===== */}
            <Col lg={3}>
              <div
                style={{
                  background: "#05171d",
                  padding: 20,
                  borderRadius: 8,
                  marginTop: "10px",
                }}
              >
                <h5 style={{ color: "#fff", marginBottom: 12 }}>
                  SEARCH FOR MOVIE
                </h5>

                <div style={{ color: "#9fb2bf", marginBottom: 8 }}>
                  Movie name
                </div>
                <input
                  placeholder="Enter keywords"
                  style={{
                    width: "100%",
                    padding: 10,
                    borderRadius: 4,
                    border: "1px solid #19333b",
                    background: "#0b2b33",
                    color: "#fff",
                  }}
                />

                <div
                  style={{ marginTop: 14, color: "#9fb2bf", marginBottom: 8 }}
                >
                  Genres & Subgenres
                </div>
                <select
                  style={{
                    width: "100%",
                    padding: 10,
                    borderRadius: 4,
                    border: "1px solid #19333b",
                    background: "#0b2b33",
                    color: "#fff",
                  }}
                >
                  <option>All</option>
                  <option>Action</option>
                  <option>Drama</option>
                  <option>Comedy</option>
                </select>

                <div
                  style={{ marginTop: 14, color: "#9fb2bf", marginBottom: 8 }}
                >
                  Rating Range
                </div>
                <select
                  style={{
                    width: "100%",
                    padding: 10,
                    borderRadius: 4,
                    border: "1px solid #19333b",
                    background: "#0b2b33",
                    color: "#fff",
                  }}
                >
                  <option>-- Select the rating range below --</option>
                  <option>8 - 10</option>
                  <option>5 - 7.9</option>
                  <option>Below 5</option>
                </select>

                <div
                  style={{ marginTop: 14, color: "#9fb2bf", marginBottom: 8 }}
                >
                  Release Year
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <select
                    style={{
                      flex: 1,
                      padding: 10,
                      borderRadius: 4,
                      border: "1px solid #19333b",
                      background: "#0b2b33",
                      color: "#fff",
                    }}
                  >
                    <option>From</option>
                    <option>2000</option>
                    <option>2010</option>
                    <option>2020</option>
                  </select>
                  <select
                    style={{
                      flex: 1,
                      padding: 10,
                      borderRadius: 4,
                      border: "1px solid #19333b",
                      background: "#0b2b33",
                      color: "#fff",
                    }}
                  >
                    <option>To</option>
                    <option>2010</option>
                    <option>2020</option>
                    <option>2025</option>
                  </select>
                </div>

                <Button
                  variant="info"
                  className="w-100 mt-3"
                  style={{ fontWeight: 600 }}
                >
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default NewPopular;
