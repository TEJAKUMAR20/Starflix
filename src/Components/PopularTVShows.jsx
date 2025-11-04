import React, { useState } from "react";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import UniversalSearchHeader from "./UniversalSearchHeader";
import { useLocation, useNavigate } from "react-router-dom";

const PopularTVShows = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  //  TV Shows data with slug (for navigation)
  const slides = [
    [
      { title: "Big Boss", slug: "big-boss", image: process.env.PUBLIC_URL + "/images/posters/bigboss.png" },
      { title: "Dance-Plus", slug: "dance-plus", image: process.env.PUBLIC_URL + "/images/dancepluse.png" },
      { title: "Koffee With Karan", slug: "koffee-with-karan", image: process.env.PUBLIC_URL + "/images/koffe.png" },
      { title: "Dee", slug: "dee", image: process.env.PUBLIC_URL + "/images/dee.png" },
      { title: "Sherlock", slug: "sherlock", image: process.env.PUBLIC_URL + "/images/sherlock.png" },
      { title: "Super Singer", slug: "super-singer", image: process.env.PUBLIC_URL + "/images/supersinger.png" },
    ],
    [
      { title: "Boys", slug: "boys", image: process.env.PUBLIC_URL + "/images/posters/boys.png" },
    ],
  ];

  //  Navigate to Single TV Show page
  const handleReadMore = (slug) => {
    navigate(`/tvshows/${slug}`);
  };

  return (
    <div style={{ backgroundColor: "#0b0f19" }}>
      {/*  Universal Header */}
      {location.pathname === "/tvshows" && (
        <UniversalSearchHeader
          title="TV Shows"
          bgImage={process.env.PUBLIC_URL + "/images/bg-tvshows.jpg"}
        />
      )}

      {/*  Content Section */}
      <section style={{ color: "white", padding: "20px 60px 60px" }}>
        <Container fluid>
          {/* Header */}
          <Row
            className="align-items-start justify-content-between"
            style={{ marginBottom: "25px" }}
          >
            <Col xs="auto">
              <h2
                style={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                Popular TV Shows
              </h2>
            </Col>

            {/* View All + Dots */}
            <Col xs="auto" className="text-center">
              <div
                className="text-info fw-semibold"
                style={{ cursor: "pointer", fontSize: "1rem" }}
              >
                View All →
              </div>
              <Stack
                direction="horizontal"
                gap={1}
                className="justify-content-center mt-2"
              >
                {slides.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor:
                        activeSlide === index ? "#FFD700" : "#bbb",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  ></div>
                ))}
              </Stack>
            </Col>
          </Row>

          {/*  Show Cards */}
          <Row
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              gap: "16px",
            }}
          >
            {slides[activeSlide].map((show, index) => (
              <Col
                key={index}
                style={{
                  flex: "0 0 220px",
                  textAlign: "center",
                }}
              >
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "10px",
                    cursor: "pointer",
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    boxShadow:
                      hoveredIndex === index
                        ? "0 0 20px rgba(1, 7, 8, 0.4)"
                        : "0 4px 10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {/*  Poster */}
                  <img
                    src={show.image}
                    alt={show.title}
                    style={{
                      width: "100%",
                      height: "320px",
                      objectFit: "cover",
                      borderRadius: "5px",
                      display: "block",
                    }}
                  />

                  {/*  Title */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      color: "#fff",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontSize: "0.9rem",
                      textShadow: "0px 2px 5px rgba(0,0,0,0.9)",
                    }}
                  >
                    {show.title}
                  </div>

                  {/*  Hover Overlay with Read More */}
                  {hoveredIndex === index && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.65)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        variant="info"
                        className="fw-semibold text-dark"
                        style={{
                          borderRadius: "50px",
                          padding: "8px 20px",
                          border: "none",
                          outline: "none",
                          boxShadow: "none",
                        }}
                        onClick={() => handleReadMore(show.slug)} // 👈 Redirect to AllTVSingle.jsx
                      >
                        Read More
                      </Button>
                    </div>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PopularTVShows;
