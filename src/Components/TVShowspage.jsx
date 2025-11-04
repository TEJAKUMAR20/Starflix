// src/Components/TVShowsPage.jsx
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PaginationBar from "./PaginationBar"; // ✅ Reusable Pagination Component

const TVShowsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [sortOption, setSortOption] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const [showsPerPage, setShowsPerPage] = useState(10);
  const [showBackTop, setShowBackTop] = useState(false);
  const navigate = useNavigate();

  // ✅ TV Shows Data
  const shows = [
    { title: "Big Boss", image: "/images/posters/bigboss.png" },
    { title: "Dance Plus", image: "/images/dancepluse.png" },
    { title: "Koffee With Karan", image: "/images/koffe.png" },
    { title: "Super Singer", image: "/images/supersinger.png" },
    { title: "Sherlock", image: "/images/sherlock.png" },
    { title: "Dee", image: "/images/dee.png" },
    { title: "Breaking Bad", image: "/images/breakingbad.png" },
    { title: "MoneyHiest", image: "/images/moneyhiest.png" },
    { title: "FamilyMan", image: "/images/familyman.png" },
    { title: "HariKatha", image: "/images/harikatha.png" },
    { title: "Demon Slayer", image: "/images/demonslayer.png" },
    { title: "StarWars", image: "/images/posters/starwars.png" },
  ];

  // ✅ Pagination Setup
  const totalShows = shows.length;
  const totalPages = Math.ceil(totalShows / showsPerPage);
  const startIndex = (currentPage - 1) * showsPerPage;
  const currentShows = shows.slice(startIndex, startIndex + showsPerPage);

  // ✅ Navigate to Single TV Show Page
  const handleReadMore = (title) => {
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim();

    // ✅ Correct path to match App.js route
    navigate(`/tvshows/${slug}`);
  };

  // ✅ Show “Back to Top” Button on Scroll
  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 250);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: "#0b0f19", minHeight: "100vh" }}>
      <section style={{ color: "white", padding: "30px 0" }}>
        <Container>
          {/* 🔹 Header */}
          <Row
            className="align-items-center justify-content-between py-3 mb-4"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.15)",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <Col>
              <p className="mb-0 text-light">
                Found <strong>{totalShows}</strong> TV Shows in total
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

          {/* 🔹 Show Cards Grid */}
          <Row className="g-4 mt-2">
            {currentShows.map((show, index) => (
              <Col key={index} xs={6} sm={4} md={3} lg={2}>
                <Card
                  className="bg-transparent border-0 text-center"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="position-relative overflow-hidden rounded">
                    <Card.Img
                      src={show.image}
                      alt={show.title}
                      className="rounded"
                      style={{
                        height: "300px",
                        objectFit: "cover",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />

                    {/* 🔹 Hover Overlay */}
                    {hoveredIndex === index && (
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
                        <Button
                          variant="info"
                          size="sm"
                          className="fw-semibold text-dark rounded-pill px-3 py-2"
                          onClick={() => handleReadMore(show.title)}
                        >
                          Read More
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* 🔹 Show Title */}
                  <Card.Title
                    className="text-uppercase fs-6 mt-2"
                    style={{
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                      color: "white",
                    }}
                  >
                    {show.title}
                  </Card.Title>
                </Card>
              </Col>
            ))}
          </Row>

          {/* 🔹 Pagination Component */}
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={showsPerPage}
            setItemsPerPage={setShowsPerPage}
            onPageChange={setCurrentPage}
            label="Shows"
          />
        </Container>
      </section>
    </div>
  );
};

export default TVShowsPage;
