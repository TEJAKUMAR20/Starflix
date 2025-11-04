import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeLang, setActiveLang] = useState("English");
  const navigate = useNavigate();

  const moviesByLang = {
    English: [
      { title: "Hobbit", image: process.env.PUBLIC_URL + "/images/posters/hobbit.png" },
      { title: "Back To The Future", image: process.env.PUBLIC_URL + "/images/posters/backtothefuture.png" },
      { title: "Jurassic Park", image: process.env.PUBLIC_URL + "/images/posters/jurassicpark.png" },
      { title: "12thFail", image: process.env.PUBLIC_URL + "/images/posters/12thfail.png" },
      { title: "Sicario", image: process.env.PUBLIC_URL + "/images/posters/sicaro.png" },
      { title: "Star Wars", image: process.env.PUBLIC_URL + "/images/posters/starwars.png" },
    ],
    Hindi: [
      { title: "Chhichhore", image: process.env.PUBLIC_URL + "/images/posters/chhichhore.png" },
      { title: "M.S. Dhoni: The Untold Story", image: process.env.PUBLIC_URL + "/images/posters/msdhoni.png" },
     
      { title: "Brahmastra", image: process.env.PUBLIC_URL + "/images/posters/brahmastra.png" },
      { title: "Pathaan", image: process.env.PUBLIC_URL + "/images/posters/pathaan.png" },
      { title: "Kalki 2898 AD", image: process.env.PUBLIC_URL + "/images/posters/kalki.png" },
      { title: "Dangal", image: process.env.PUBLIC_URL + "/images/posters/dangal.png" },
    ],
    Telugu: [
      { title: "Pushpa", image: process.env.PUBLIC_URL + "/images/posters/pushpa2.png" },
      { title: "RRR", image: process.env.PUBLIC_URL + "/images/posters/rrr.png" },
      { title: "Salaar", image: process.env.PUBLIC_URL + "/images/posters/salaar.png" },
      { title: "Baahubali", image: process.env.PUBLIC_URL + "/images/posters/bahubali.png" },
      { title: "Devara", image: process.env.PUBLIC_URL + "/images/posters/devara.png" },
      { title: "Sita Ramam", image: process.env.PUBLIC_URL + "/images/posters/sitaramam.png" },
    ],
    Tamil: [
      { title: "Leo", image: process.env.PUBLIC_URL + "/images/posters/leo.png" },
      { title: "Jailer", image: process.env.PUBLIC_URL + "/images/posters/jailer.png" },
      { title: "Vikram", image: process.env.PUBLIC_URL + "/images/posters/vikram.png" },
      { title: "Maaveeran", image: process.env.PUBLIC_URL + "/images/posters/maaveeran.png" },
      { title: "Robo", image: process.env.PUBLIC_URL + "/images/posters/robo.png" },
      { title: "Master", image: process.env.PUBLIC_URL + "/images/posters/master.png" },
    ],
    Malayalam: [
      { title: "Aavesham", image: process.env.PUBLIC_URL + "/images/posters/avaesh.png" },
      { title: "Premalu", image: process.env.PUBLIC_URL + "/images/posters/premalu.png" },
      { title: "2018", image: process.env.PUBLIC_URL + "/images/posters/2018.png" },
      { title: "Manjummel Boys", image: process.env.PUBLIC_URL + "/images/posters/mun.png" },
      { title: "Romancham", image: process.env.PUBLIC_URL + "/images/posters/ro.png" },
      { title: "Drishyam 2", image: process.env.PUBLIC_URL + "/images/posters/dri.png" },
    ],
  };

  const languages = Object.keys(moviesByLang);
  const movies = moviesByLang[activeLang] || [];

  // ✅ Create slug that exactly matches database keys
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/\(hindi dub\)/g, "hindi-dub") // special case fix
      .replace(/\(.*?\)/g, "") // remove other brackets
      .replace(/[^\w\s-]/g, "") // remove symbols
      .replace(/\s+/g, "-") // replace spaces
      .trim();
  };

  const handleReadMore = (lang, title) => {
    const slug = createSlug(title);
    navigate(`/movie/${lang.toLowerCase()}/${slug}`);
  };

  return (
    <div style={{ backgroundColor: "#0b0f19", color: "white", padding: "80px 60px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold" }}>
          Movies
        </h2>
        <div style={{ textAlign: "center", cursor: "pointer" }}>
          <div
            style={{
              color: "#0dcaf0",
              fontWeight: 600,
              fontSize: "1rem",
              marginBottom: "6px",
            }}
          >
            View All →
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "6px" }}>
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#FFD700",
                borderRadius: "50%",
              }}
            ></div>
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#fff",
                borderRadius: "50%",
                opacity: 0.8,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/*  Language Tabs */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          marginBottom: "40px",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        {languages.map((lang, index) => (
          <span
            key={index}
            onClick={() => setActiveLang(lang)}
            style={{
              color: activeLang === lang ? "#FFD700" : "#bbb",
              borderBottom: activeLang === lang ? "2px solid #FFD700" : "none",
              paddingBottom: "5px",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.target.style.color = "#0dcaf0")}
            onMouseOut={(e) => (e.target.style.color = activeLang === lang ? "#FFD700" : "#bbb")}
          >
            {lang}
          </span>
        ))}
      </div>

      {/*  Movie Cards */}
      <Row style={{ gap: "20px" }}>
        {movies.map((movie, index) => (
          <Col key={index} style={{ flex: "0 0 220px" }}>
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow:
                  hoveredIndex === index
                    ? "0 0 20px rgba(0, 0, 0, 0.4)"
                    : "0 4px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <img
                src={movie.image}
                alt={movie.title}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  display: "block",
                }}
              />
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
                  textShadow: "0px 2px 6px rgba(0,0,0,0.9)",
                }}
              >
                {movie.title}
              </div>

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
                      transition: "all 0.2s ease-in-out",
                    }}
                    onClick={() => handleReadMore(activeLang, movie.title)}
                  >
                    Read More
                  </Button>
                </div>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieSection;
