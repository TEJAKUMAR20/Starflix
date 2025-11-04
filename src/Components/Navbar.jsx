import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Styles/Navbar.css";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false); // ✅ For toggle state

  //  Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <Navbar
      expand="lg" //  show full navbar on laptops, toggle on small screens
      variant="dark"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="position-fixed top-0 start-0 w-100 py-3"
      style={{
        backgroundColor: "#0b0f19",
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.4)",
      }}
    >
      <Container>
        {/*  Brand Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={process.env.PUBLIC_URL + "/images/starflex.png"}
            alt="StarFlix Logo"
            style={{
              height: "40px",
              width: "auto",
            }}
          />
        </Navbar.Brand>

        {/*  Toggle visible always (forced visible even on large screens) */}
        <Navbar.Toggle
          aria-controls="main-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
          className="d-lg-none" // visible only on small screens
        />

        {/*  Navbar Links */}
        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <Nav.Link
              as={Link}
              to="/"
              className="fw-semibold text-light"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/movies"
              className="fw-semibold text-light"
              onClick={() => setExpanded(false)}
            >
              Movies
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/tvshows"
              className="fw-semibold text-light"
              onClick={() => setExpanded(false)}
            >
              TV Shows
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/new"
              className="fw-semibold text-light"
              onClick={() => setExpanded(false)}
            >
              New & Popular
            </Nav.Link>

            {/*  User Dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle
                as="div"
                id="user-menu"
                style={{
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  padding: 0,
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/posters/digit.png"}
                  alt="User"
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    padding: "4px",
                    objectFit: "cover",
                  }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="shadow border-0 mt-2"
                style={{
                  backgroundColor: "#0b1730",
                  borderRadius: "8px",
                  padding: "8px 0",
                  width: "220px",
                }}
              >
                <Dropdown.Item
                  as={Link}
                  to="#"
                  style={{
                    color: "#ffffff",
                    fontWeight: 500,
                    padding: "10px 16px",
                    pointerEvents: "none",
                  }}
                >
                  DIGIT IT
                </Dropdown.Item>

                <Dropdown.Divider
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                />

                <Dropdown.Item
                  as={Link}
                  to="/account"
                  style={{
                    color: "#ffffff",
                    fontWeight: 500,
                    padding: "10px 16px",
                  }}
                >
                  ACCOUNT
                </Dropdown.Item>

                <Dropdown.Divider
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                />

                <Dropdown.Item
                  onClick={handleLogout}
                  style={{
                    color: "#ff6b6b",
                    fontWeight: 600,
                    padding: "10px 16px",
                  }}
                >
                  ⓘ SIGN OUT OF STARFLIX
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
