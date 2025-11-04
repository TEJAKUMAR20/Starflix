// src/Components/Hero.jsx
import React from "react";
import { Container, Row, Col, Button, Badge, Carousel } from "react-bootstrap";
import { StarFill, PlayCircle, Heart, Share } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const bgImage = process.env.PUBLIC_URL + "/images/bg.png";
  const navigate = useNavigate();

  const movies = [
    {
      title: "MAD SQUARE",
      genres: ["Drama", "Comedy"],
      description:
        "Mad Square is a Telugu movie starring Narne Nithin, Sangeeth Shobhan, Ram Nithin and Priyanka Jawalkar in prominent roles. It is written and directed by Kalyan Shankar.",
      rating: "8.4/10",
      runtime: "2h 7m",
      age: "UA16+",
      poster: process.env.PUBLIC_URL + "/images/posters/mad2.png",
      trailerUrl: "https://www.youtube.com/watch?v=gA0nS3sBqzI",
    },
    {
      title: "VENOM: THE LAST DANCE",
      genres: ["Action", "Sci-Fi"],
      description:
        "Eddie Brock and Venom face their greatest challenge yet — survival in a collapsing universe. The end begins.",
      rating: "8.1/10",
      runtime: "1h 58m",
      age: "UA13+",
      poster: process.env.PUBLIC_URL + "/images/posters/venom.png",
      trailerUrl: "https://www.youtube.com/watch?v=__2bjWbetsA",
    },
    {
      title: "OG",
      genres: ["Action", "Drama"],
      description:
        "Pawan Kalyan and Sujeeth’s massive gangster flick declares one thing loudly that the Firestorm is not coming, anytime soon.",
      rating: "8.9/10",
      runtime: "2h 10m",
      age: "UA",
      poster: process.env.PUBLIC_URL + "/images/posters/og.png",
      trailerUrl: "https://www.youtube.com/watch?v=8fvTxv46ano",
    },
  ];

  //  Navigate to correct movie detail page
  const handleMoreDetail = (movieTitle) => {
    const formattedTitle = movieTitle
      .toLowerCase()
      .replace(/[:]+/g, "")
      .replace(/\s+/g, "-");
    navigate(`/movie/telugu/${formattedTitle}`);
  };

  //  WATCH TRAILER (open new tab properly)
  const handleWatchTrailer = (trailerUrl) => {
    if (!trailerUrl) {
      alert("Trailer not available yet 🎬");
      return;
    }

    // Convert to embeddable or watch link
    let finalUrl = trailerUrl;
    if (trailerUrl.includes("watch?v=")) {
      finalUrl = trailerUrl.replace("watch?v=", "embed/");
    }

    // Open in a new tab
    window.open(finalUrl, "_blank", "noopener,noreferrer");
  };

  //  SHARE
  const handleShare = async (movie) => {
    const shareData = {
      title: movie.title,
      text: `Check out the trailer for ${movie.title}!`,
      url: movie.trailerUrl || window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.warn("Share canceled or failed:", err);
      }
    } else {
      await navigator.clipboard.writeText(shareData.url);
      alert("🔗 Trailer link copied to clipboard!");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
        color: "white",
        paddingTop: "150px",
        overflow: "hidden",
      }}
    >
      {/*  Carousel */}
      <Carousel indicators={false}>
        {movies.map((movie, index) => (
          <Carousel.Item key={index}>
            <Container className="position-relative py-5" style={{ zIndex: 3 }}>
              <Row className="align-items-center justify-content-between">
                {/*  Text Section */}
                <Col md={6} className="mb-5">
                  {/* 🎬 Genres */}
                  <div className="mb-3">
                    {movie.genres.map((genre, i) => (
                      <Badge
                        key={i}
                        bg={i % 2 === 0 ? "info" : "warning"}
                        text="dark"
                        className="me-2 fw-semibold"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {genre.toUpperCase()}
                      </Badge>
                    ))}
                  </div>

                  {/*  Title */}
                  <h1
                    className="fw-bold"
                    style={{
                      fontSize: "3rem",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    {movie.title}
                  </h1>

                  {/*  Description */}
                  <p className="lead mt-3" style={{ maxWidth: "95%" }}>
                    {movie.description}
                  </p>

                  {/*  Buttons */}
                  <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                    <Button
                      variant="outline-info"
                      className="d-flex align-items-center gap-2 fw-semibold px-3 py-2"
                      onClick={() => handleWatchTrailer(movie.trailerUrl)}
                    >
                      <PlayCircle size={20} /> WATCH TRAILER
                    </Button>

                    <Button
                      variant="outline-info"
                      className="d-flex align-items-center gap-2 fw-semibold px-3 py-2"
                      onClick={() => handleShare(movie)}
                    >
                      <Share size={20} /> SHARE
                    </Button>

                    <Button
                      variant="outline-info"
                      className="d-flex align-items-center gap-2 fw-semibold px-3 py-2"
                    >
                      <Heart size={20} /> ADD TO FAVORITE
                    </Button>
                  </div>

                  {/*  Rating Info */}
                  <div className="d-flex align-items-center mt-4">
                    <StarFill color="gold" size={18} className="me-2" />
                    <span className="me-4 fw-semibold">{movie.rating}</span>
                    <span className="me-4">• Run Time: {movie.runtime}</span>
                    <span>• {movie.age}</span>
                  </div>

                  {/*  More Detail */}
                  <div className="mt-4">
                    <Button
                      variant="info"
                      className="fw-bold px-4 py-2 rounded-pill text-dark"
                      onClick={() => handleMoreDetail(movie.title)}
                    >
                      MORE DETAIL
                    </Button>
                  </div>
                </Col>

                {/*  Poster */}
                <Col md={5} className="text-center" style={{ marginLeft: "40px" }}>
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="img-fluid rounded shadow-lg"
                    style={{
                      maxHeight: "410px",
                      borderRadius: "20px",
                      objectFit: "cover",
                      transition:
                        "transform 0.8s ease-in-out, opacity 0.8s ease-in-out",
                      opacity: 1,
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>

      {/*  Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          zIndex: 1,
        }}
      ></div>

      {/*  Arrows */}
      <style>
        {`
          .carousel-item {
            position: relative !important;
            display: none;
            transition: transform 1s ease-in-out, opacity 1s ease-in-out !important;
            opacity: 0;
          }
          .carousel-item.active,
          .carousel-item-next,
          .carousel-item-prev {
            display: block;
            opacity: 1;
          }
          .carousel-inner {
            position: relative;
            min-height: 650px;
            overflow: hidden;
          }
          .carousel {
            position: relative;
            z-index: 2;
          }
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            filter: brightness(0) invert(1) !important;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            padding: 15px;
            width: 3rem;
            height: 3rem;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
            opacity: 1 !important;
            transition: all 0.3s ease-in-out;
          }
          .carousel-control-prev,
          .carousel-control-next {
            top: 50%;
            transform: translateY(-50%);
            width: 5%;
            z-index: 10 !important;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
