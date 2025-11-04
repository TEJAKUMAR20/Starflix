import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    //  Redirect only if user is already logged in
    if (isLoggedIn && isLoggedIn === "true") {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          position: "absolute",
          inset: 0,
        }}
      />

      {/* Content */}
      <Container className="position-relative d-flex flex-column justify-content-center align-items-center h-100">
        {/*  Logo Image */}
        <img
          src={process.env.PUBLIC_URL + "/images/starflex.png"}
          alt="StarFlix Logo"
          style={{
            width: "180px",
            height: "auto",
            marginBottom: "15px",
            filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
          }}
        />

        {/*  Restored Text */}
        <h2 className="fw-bold">Unlimited streaming of</h2>
        <h2 className="fw-bold text-info">movies, series, and more.</h2>

        <p className="text-light mb-4">
          All your favorites in one place. Start watching now.
        </p>

        {/*  Login Button */}
        <Button
          variant="info"
          size="lg"
          className="rounded-pill fw-bold text-dark px-5"
          onClick={() => navigate("/login2")}
        >
          LOGIN
        </Button>
      </Container>
    </div>
  );
};

export default Login;
