// src/Components/AllTVSingle.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { StarFill, PlayCircle, Heart, Share } from "react-bootstrap-icons";
import UniversalSearchHeader from "./UniversalSearchHeader";

//  TV Database
const TV_DB = {
  "big-boss": {
    title: "Bigg Boss",
    rating: 7.2,
    reviews: "240K Reviews",
    director: "Various Directors",
    cast: ["Salman Khan", "Nagarjuna", "Kamal Haasan"],
    genres: ["Reality", "Drama"],
    releaseDate: "3 Nov, 2006",
    runtime: "40 min per episode",
    overview:
      "A group of contestants live together in a house under constant surveillance, completing tasks and facing eliminations.",
    poster: process.env.PUBLIC_URL + "/images/posters/bigboss.png",
    bgImage: process.env.PUBLIC_URL + "/images/background/bigbossbg.png",
    trailerUrl: "https://www.youtube.com/embed/l9qAkbOzkow",
  },
  "dance-plus": {
    title: "Dance Plus",
    rating: 8.0,
    reviews: "310K Reviews",
    director: "Remo D'Souza",
    cast: ["Remo D'Souza", "Raghav Juyal"],
    genres: ["Reality", "Dance"],
    releaseDate: "26 Jul, 2015",
    runtime: "60 min per episode",
    overview:
      "India's best dancers showcase their talent and creativity, judged by dance masters.",
    poster: process.env.PUBLIC_URL + "/images/dancepluse.png",
    bgImage: process.env.PUBLIC_URL + "/images/background/danceplusebg.png",
    trailerUrl: "https://www.youtube.com/embed/EbQUH4NNUlE",
  },
  "koffee-with-karan": {
    title: "Koffee With Karan",
    rating: 7.9,
    reviews: "450K Reviews",
    director: "Karan Johar",
    cast: ["Karan Johar", "Bollywood Celebrities"],
    genres: ["Talk Show", "Celebrity"],
    releaseDate: "19 Nov, 2004",
    runtime: "50 min per episode",
    overview:
      "Celebrities spill secrets, share stories, and play fun games with host Karan Johar over a cup of coffee.",
    poster: process.env.PUBLIC_URL + "/images/koffe.png",
    bgImage: process.env.PUBLIC_URL + "/images/background/koffe.png",
    trailerUrl: "https://www.youtube.com/embed/sXwa3sppI90",
  },
};

//  Component Function
const AllTVSingle = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [showTrailer, setShowTrailer] = useState(false);

  const show = TV_DB[slug];

  //  Handle missing show
  if (!show) {
    return (
      <Container className="text-center text-light mt-5">
        <h2>Show Not Found 😢</h2>
        <p>Slug: {slug}</p>
      </Container>
    );
  }

  //  Share button logic
  const handleShare = async () => {
    const shareData = {
      title: show.title,
      text: `Check out ${show.title} on StarFlix!`,
      url: window.location.href,
    };
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("🔗 Link copied to clipboard!");
    }
  };

  return (
    <>
      <UniversalSearchHeader title={show.title} bgImage={show.bgImage} />

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url(${show.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <Container className="pt-4 pb-5">
          <Row className="g-5">
            {/* 🎥 Poster Section */}
            <Col md={4} className="text-center">
              <img
                src={show.poster}
                alt={show.title}
                className="img-fluid rounded shadow-lg"
                style={{
                  border: "3px solid #ffcc00",
                  borderRadius: 12,
                  width: "80%",
                  maxWidth: "600px",
                  margin: "0 auto",
                  display: "block",
                }}
              />

              {/* 🎬 Trailer & Favorite Buttons */}
              <div className="mt-4 d-flex flex-column align-items-center gap-3">
                <Button
                  variant="info"
                  className="fw-semibold text-dark px-4 py-2 rounded-pill d-flex align-items-center gap-2"
                  onClick={() => setShowTrailer((prev) => !prev)}
                >
                  <PlayCircle size={18} />{" "}
                  {showTrailer ? "HIDE TRAILER" : "WATCH TRAILER"}
                </Button>

                <Button
                  variant="warning"
                  className="fw-bold text-dark px-4 py-2 rounded-pill d-flex align-items-center gap-2"
                >
                  <Heart size={18} /> ADD TO FAVORITE
                </Button>
              </div>
            </Col>

            {/*  Info Section */}
            <Col md={8}>
              <h1 className="fw-bold mb-3">{show.title}</h1>

              {/*  Add Favorite + Share Below Title */}
              <div className="d-flex align-items-center gap-3 mb-4">
                <Button
                  variant="outline-info"
                  className="fw-semibold px-3 py-2 d-flex align-items-center gap-2"
                >
                  <Heart size={18} /> ADD TO FAVORITE
                </Button>
                <Button
                  variant="outline-info"
                  className="fw-semibold px-3 py-2 d-flex align-items-center gap-2"
                  onClick={handleShare}
                >
                  <Share size={18} /> SHARE
                </Button>
              </div>

              {/*  Rating */}
              <div
                className="d-flex align-items-center mb-4 border border-secondary rounded p-2"
                style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
              >
                <StarFill color="gold" size={22} className="me-2" />
                <div>
                  <h5 className="mb-0 fw-bold text-light">{show.rating}/10</h5>
                  <small className="text-info">{show.reviews}</small>
                </div>
              </div>

              {/*  Tabs */}
              <Nav
                variant="tabs"
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
                className="mb-4"
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="overview"
                    className="fw-bold text-warning"
                  >
                    OVERVIEW
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="cast" className="fw-bold text-warning">
                    CAST & CREW
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="reviews" className="fw-bold text-warning">
                    REVIEWS
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              {/*  Overview Section */}
              {activeTab === "overview" && (
                <Row>
                  <Col md={7}>
                    <p>{show.overview}</p>
                    <h5 className="text-warning fw-bold mt-4 mb-3">
                      WATCH TRAILER
                    </h5>

                    {showTrailer ? (
                      <div
                        className="ratio ratio-16x9 shadow-lg rounded"
                        style={{ border: "2px solid #0dcaf0" }}
                      >
                        <iframe
                          src={show.trailerUrl}
                          title={`${show.title} Trailer`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : (
                      <p className="text-muted fst-italic">
                        Click <strong>WATCH TRAILER</strong> to play the video 🎬
                      </p>
                    )}
                  </Col>

                  <Col md={5}>
                    <p><strong>Director:</strong> {show.director}</p>
                    <p><strong>Stars:</strong> {show.cast.join(", ")}</p>
                    <p><strong>Genres:</strong> {show.genres.join(", ")}</p>
                    <p><strong>Release Date:</strong> {show.releaseDate}</p>
                    <p><strong>Runtime:</strong> {show.runtime}</p>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AllTVSingle;
