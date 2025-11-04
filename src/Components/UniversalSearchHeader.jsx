// src/Components/UniversalSearchHeader.jsx
import React, { useState, memo } from "react";
import { Container, Row, Col, InputGroup, Form, Button, Dropdown } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";

const UniversalSearchHeader = ({ title, bgImage }) => {
  const [category, setCategory] = useState("MOVIE");
  const location = useLocation();

  console.log("UniversalSearchHeader rendered"); //  Debugging

  //  Auto-detect section name if title not passed
  let pageTitle = title;
  if (!pageTitle) {
    if (location.pathname.includes("/movies")) pageTitle = "Movies";
    else if (location.pathname.includes("/tvshows")) pageTitle = "TV Shows";
    else if (location.pathname.includes("/new")) pageTitle = "New & Popular";
    else pageTitle = "Explore";
  }

  return (
    <section
      style={{
        backgroundColor: "#0b0f19",
        color: "white",
        padding: "100px 0 40px 0",
        textAlign: "center",
        backgroundImage: `url(${bgImage || process.env.PUBLIC_URL + "/images/bg.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
          backgroundRepeat: "no-repeat",
       
      }}
    >
      <Container>
        {/*  Search Bar */}
        <Row className="justify-content-center mb-5" style={{ marginTop: "30px" }}>
          <Col xs={15} md={12} lg={10}>
            <InputGroup>
              {/* Dropdown */}
              <Dropdown>
                <Dropdown.Toggle
                  variant="dark"
                  id="dropdown-basic"
                  style={{
                    backgroundColor: "#1a2a3a",
                    border: "none",
                    padding: "12px 20px",
                    fontWeight: "500",
                    color: "#fff",
                    borderTopLeftRadius: "6px",
                    borderBottomLeftRadius: "6px",
                  }}
                >
                  {category}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setCategory("MOVIE")}>MOVIE</Dropdown.Item>
                  <Dropdown.Item onClick={() => setCategory("TV SHOW")}>TV SHOW</Dropdown.Item>
                  <Dropdown.Item onClick={() => setCategory("CELEBRITY")}>CELEBRITY</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Search Input */}
              <Form.Control
                type="text"
                placeholder={`Search for a ${category.toLowerCase()}...`}
                className="custom-placeholder"
                style={{
                  backgroundColor: "#1a2a3a",
                  border: "none",
                  color: "#fff",
                  padding: "12px 15px",
                  outline: "none",
                  boxShadow: "none",
                }}
                onFocus={(e) => (e.target.style.boxShadow = "none")}
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />

              {/* Search Button */}
              <Button
                variant="dark"
                style={{
                  backgroundColor: "#1a2a3a",
                  border: "none",
                  padding: "12px 20px",
                }}
              >
                <Search size={20} color="#bbb" />
              </Button>
            </InputGroup>

            {/*  Inline CSS for placeholder */}
            <style>
              {`
                .custom-placeholder::placeholder {
                  color: #ddd;
                  opacity: 1;
                }
                .custom-placeholder:focus::placeholder {
                  color: #bbb;
                }
              `}
            </style>
          </Col>
        </Row>

        {/*  Title + Breadcrumb */}
        <div>
          <h1
            className="fw-bold text-uppercase mb-3"
            style={{
              fontSize: "2.5rem",
              letterSpacing: "1px",
            }}
          >
            {pageTitle}
          </h1>

          <div
            className="text-muted"
            style={{
              fontSize: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            <Link
              to="/"
              style={{
                color: "#0dcaf0",
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Home
            </Link>{" "}
            <span style={{ color: "#fff" }}>›</span> {pageTitle}
          </div>
        </div>
      </Container>
    </section>
  );
};

//  Prevent duplicate re-renders
export default memo(UniversalSearchHeader);
