// src/Components/InTheater.jsx
import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { ChevronUp, ChevronDown } from "react-bootstrap-icons";

const InTheater = () => {
  const [selected, setSelected] = useState(0);
  const listRef = useRef(null);
  const [showBackTop, setShowBackTop] = useState(false);

  // Trailer list - use absolute paths from public folder or remote urls
  const trailers = [
    {
      title: "Logan: Director James Mangold Interview",
      duration: "2:43",
      videoUrl: "https://www.youtube.com/embed/gbug3zTm3Ws",
      image: process.env.PUBLIC_URL + "/images/posters/logan.png",
    },
    {
      title: "Fast & Furious 8",
      duration: "3:11",
      videoUrl: "https://www.youtube.com/embed/NxhEZG0k9_w",
      image: process.env.PUBLIC_URL + "/images/posters/fast.png",
    },
    {
      title: "Wonder Woman Official Trailer",
      duration: "2:30",
      videoUrl: "https://www.youtube.com/embed/VSB4wGIdDwo",
      image: process.env.PUBLIC_URL + "/images/posters/wonder.png",
    },
    {
      title: "Oblivion: Official Teaser Trailer",
      duration: "2:41",
      videoUrl: "https://www.youtube.com/embed/XmIIgE7eSak",
      image: process.env.PUBLIC_URL + "/images/posters/oblivion.png",
    },
    {
      title: "Avatar: The Way of Water",
      duration: "2:29",
      videoUrl: "https://www.youtube.com/embed/d9MyW72ELq0",
      image: process.env.PUBLIC_URL + "/images/posters/avatar.png",
    },
    {
      title: "Avengers: Endgame Official Trailer",
      duration: "2:26",
      videoUrl: "https://www.youtube.com/embed/TcMBFSGVi1c",
      image: process.env.PUBLIC_URL + "/images/posters/avengers.png",
    },
    {
      title: "Spider-Man: No Way Home Trailer",
      duration: "2:56",
      videoUrl: "https://www.youtube.com/embed/JfVOs4VSpmA",
      image: process.env.PUBLIC_URL + "/images/posters/spiderman.png",
    },
  ];

  // Ensure selected stays in bounds if trailers array changes
  useEffect(() => {
    if (trailers.length === 0) {
      setSelected(-1);
    } else if (selected < 0 || selected >= trailers.length) {
      setSelected(0);
    }
  }, [trailers, selected]);

  // Back-to-top button visibility on scroll (optional UX)
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollList = (offset) => {
    if (listRef.current && typeof listRef.current.scrollBy === "function") {
      listRef.current.scrollBy({ top: offset, behavior: "smooth" });
    } else if (listRef.current) {
      // fallback
      listRef.current.scrollTop += offset;
    }
  };

  // If there are no trailers, show a friendly message
  const activeTrailer =
    trailers && trailers.length > 0 && selected >= 0 ? trailers[selected] : null;

  return (
    <section
      style={{
        backgroundColor: "#0b0f19",
        color: "white",
        padding: "60px 60px 40px",
      }}
    >
      <Container fluid>
        {/* Header */}
        <Row className="align-items-center justify-content-between mb-4">
          <Col xs="auto">
            <h2 className="fw-bold text-uppercase mb-0">In Theater</h2>
          </Col>
          <Col xs="auto">
            <span className="text-info fw-semibold" role="button" style={{ cursor: "pointer" }}>
              View All →
            </span>
          </Col>
        </Row>

        {/* Main Content */}
        <Row>
          {/* Left - YouTube Trailer or placeholder */}
          <Col md={8} className="mb-4 mb-md-0">
            {activeTrailer ? (
              <div className="ratio ratio-16x9 rounded shadow-lg overflow-hidden">
                <iframe
                  src={activeTrailer.videoUrl}
                  title={activeTrailer.title}
                  allowFullScreen
                  style={{ borderRadius: "10px", border: 0 }}
                />
              </div>
            ) : (
              <div
                style={{
                  height: 0,
                  paddingBottom: "56.25%",
                  position: "relative",
                  borderRadius: 12,
                  background: "#0f1720",
                }}
              >
                <div style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9fb2bf",
                }}>
                  No trailers available
                </div>
              </div>
            )}
          </Col>

          {/* Right - Scrollable List */}
          <Col md={4} className="position-relative">
            {/* Up Arrow */}
            <div className="text-center mb-2">
              <Button variant="outline-info" size="sm" onClick={() => scrollList(-150)} className="rounded-circle">
                <ChevronUp />
              </Button>
            </div>

            {/* Trailer List */}
            <div
              ref={listRef}
              className="overflow-auto rounded shadow-sm"
              style={{
                backgroundColor: "#111827",
                maxHeight: "380px",
                padding: "10px",
              }}
            >
              {trailers.map((trailer, index) => (
                <Card
                  key={index}
                  onClick={() => setSelected(index)}
                  className={`border-0 my-2 ${selected === index ? "bg-info bg-opacity-25" : "bg-transparent"}`}
                  style={{
                    cursor: "pointer",
                    transition: "all 0.18s ease",
                    borderRadius: "8px",
                  }}
                >
                  <Card.Body className="d-flex align-items-center py-2 px-2">
                    <Image
                      src={trailer.image}
                      width="70"
                      height="45"
                      rounded
                      className="me-3 shadow-sm"
                      style={{ objectFit: "cover", background: "#222" }}
                      alt={trailer.title}
                    />
                    <div style={{ minWidth: 0 }}>
                      <Card.Title as="h6" className="mb-0 text-white" style={{ fontSize: "0.9rem", lineHeight: "1.2" }}>
                        {trailer.title}
                      </Card.Title>
                      <Card.Text className="text-muted mb-0" style={{ fontSize: "0.8rem" }}>
                        {trailer.duration}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>

            {/* Down Arrow */}
            <div className="text-center mt-2">
              <Button variant="outline-info" size="sm" onClick={() => scrollList(150)} className="rounded-circle">
                <ChevronDown />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Back to Top (visible after some scroll) */}
      {showBackTop && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            textAlign: "center",
            marginTop: "40px",
            cursor: "pointer",
            color: "#0dcaf0",
            fontWeight: "600",
            textDecoration: "underline",
          }}
        >
          Back to Top ↑
        </div>
      )}
    </section>
  );
};

export default InTheater;
